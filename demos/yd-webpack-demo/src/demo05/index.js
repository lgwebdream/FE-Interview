const connectToDB = async () => {
  const data = await new Promise((r) => {
    r('京程一灯');
  });
  return data;
};
const result = await connectToDB();
let output = `${result}🍊`;
export { output };
