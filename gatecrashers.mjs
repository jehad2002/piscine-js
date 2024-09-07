// import { createServer } from 'http';
// import { writeFile } from 'fs/promises';
// import { join } from 'path';
// import { Buffer } from 'buffer';

// // Directory path for storing guest information
// const GUESTS_DIR = join(process.cwd(), 'guests');

// // List of authorized users and their passwords
// const AUTHORIZED_USERS = {
//   'Caleb_Squires': 'abracadabra',
//   'Tyrique_Dalton': 'abracadabra',
//   'Rahima_Young': 'abracadabra'
// };

// // Function to check if the request has valid authentication
// const authenticate = (authHeader) => {
//   if (!authHeader) return false;
//   const [scheme, credentials] = authHeader.split(' ');
//   if (scheme !== 'Basic') return false;
//   const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
//   return AUTHORIZED_USERS[username] === password;
// };

// // Create and start the server
// const server = createServer(async (req, res) => {
//   if (req.method === 'POST') {
//     const guestName = req.url.slice(1);
//     const filePath = join(GUESTS_DIR, `${guestName}.json`);

//     // Check for Basic Authentication
//     const authHeader = req.headers['authorization'];
//     if (!authenticate(authHeader)) {
//       res.writeHead(401, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ error: 'Authorization Required' }));
//       return;
//     }

//     let body = '';
//     req.on('data', chunk => {
//       body += chunk;
//     });

//     req.on('end', async () => {
//       try {
//         // Write the received data to the JSON file
//         await writeFile(filePath, body, 'utf8');
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(body);
//       } catch (err) {
//         // Handle server errors
//         res.writeHead(500, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ error: 'server failed' }));
//       }
//     });

//     req.on('error', () => {
//       // Handle errors while reading request data
//       res.writeHead(500, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ error: 'server failed' }));
//     });
//   } else {
//     // Handle non-POST requests
//     res.writeHead(405, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ error: 'method not allowed' }));
//   }
// });

// // Start listening on port 5000
// server.listen(5000, () => {
//   console.log('Server is listening on port 5000');
// });

// =======================================================

import { once } from 'node:events'
import { spawn } from 'node:child_process'
import { mkdir, writeFile, access } from 'fs/promises'
import { join } from 'path'
export const tests = []
const fetch = _fetch // to redefine the real fetch
const port = 5000
export const setup = async ({}) => {
  const dir = '.'
  await mkdir(`${dir}/guests`, { recursive: true })
  const createFilesIn = ({ files, dirPath }) =>
    Promise.all(
      files.map(([fileName, content]) =>
        writeFile(`${dirPath}/${fileName}`, JSON.stringify(content)),
      ),
    )
  const sendRequest = async (path, options) => {
    const response = await fetch(`http://localhost:${port}${path}`, options)
    const { status } = response
    const headers = Object.fromEntries(response.headers)
    let body = ''
    try {
      body = await response.json()
    } catch (err) {
      body = err
    }
    return { status, body, headers }
  }
  const sendRequestWithAuth = async (guestName, auth, body) => {
    let options = {
      method: 'POST',
      headers: {
        body: JSON.stringify(body),
      },
    }
    if (auth.len !== 0) {
      options.headers.authorization =
        'Basic ' + Buffer.from(auth).toString('base64')
    }
    return sendRequest(guestName, options)
  }
  const startServer = async path => {
    const server = spawn('node', [`${path}`])
    const message = await Promise.race([
      once(server.stdout, 'data'),
      Promise.race([
        once(server.stderr, 'data').then(String).then(Error),
        once(server, 'error'),
      ]).then(result => Promise.reject(result)),
    ])
    return { server, message }
  }
  return {
    tmpPath: dir,
    createFilesIn,
    sendRequest,
    sendRequestWithAuth,
    startServer,
  }
}
const isServerRunningWell = async ({ path, ctx }) => {
  const { server, message } = await ctx.startServer(path)
  server.kill()
  return message[0].toString().includes(port)
}
const testGoodRequests = async ({ path, eq, fail, ctx }) => {
  const expectedBody = {
    answer: 'yes',
    drink: 'juice',
    food: 'pizza',
  }
  const dirName = 'guests'
  const dirPath = join(ctx.tmpPath, dirName)
  const { server } = await ctx.startServer(path)
  const newGuestNames = ['Ana_Riber', 'Rob_Frie', 'George_Harl']
  const auths = [
    'Caleb_Squires:abracadabra',
    'Tyrique_Dalton:abracadabra',
    'Rahima_Young:abracadabra',
  ]
  for (var i = 0; i < 3; i++) {
    const { status, body, headers } = await ctx.sendRequestWithAuth(
      `/${newGuestNames[i]}`,
      `${auths[i]}`,
      expectedBody,
    )
    fail(await access(`${dirPath}/${newGuestNames[i]}.json`))
    eq(
      { status: status, contentType: headers['content-type'], body: body },
      { status: 200, contentType: 'application/json', body: expectedBody },
    )
  }
  server.kill()
  return true
}
const testUnauthorizedRequests = async ({ path, eq, ctx }) => {
  const body = {
    answer: 'yes',
    drink: 'juice',
    food: 'pizza',
  }
  const { server } = await ctx.startServer(path)
  const newGuestNames = [
    'Super_Mario',
    'Super_Mario',
    'Super_Mario',
    'Super_Mario',
  ]
  const auths = [
    '',
    'LetMePass',
    'Rahima_Young:wrongpass',
    'Anonymus:abracadabra',
  ]
  for (var i = 0; i < 3; i++) {
    const { status } = await ctx.sendRequestWithAuth(
      `/${newGuestNames[i]}`,
      `${auths[i]}`,
      body,
    )
    eq({ status: status }, { status: 401 })
  }
  server.kill()
  return true
}
tests.push(isServerRunningWell, testGoodRequests, testUnauthorizedRequests)
Object.freeze(tests)