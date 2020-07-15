import('./demo03/program.wasm').then((p) => {
  console.log(p.add(4, 6));
});
import { add } from './demo03/program';
console.log(add(4, 6));

let output;
async function main() {
  const dynamic = await import('../demo02/data');
  output = dynamic + '🏮';
}
main();
export { output };

const dynamic = import('../demo02/data');
export const output = (await dynamic).default + '🍊';

// import { curry } from 'lodash';
// console.log(curry);

// (async () => {
//   const module = await import('lodash');
//   console.log(module);
// })();

import('lodash').then((_) => {
  console.log(_.default);
});

// export const Yideng = "";
// async () => {
//   const data = await new Promise((r) => setTimeout(r('京程一灯🍊'), 100000));
//   return data;
// };
let data = '';
const connectToDB = async () => {
  await new Promise((r) => {
    data = '京程一灯';
    r();
  });
};

await connectToDB();
// async function output() {
//   const data2 = await Promise.resolve(Math.random());
//   return data + data2.toString();
// }
// export { output };
let output = data + '🍊';
export { output };
import await { output } from './demo05';
console.log(output);

// import './demo06/index.css';

// console.log('京程一灯');
