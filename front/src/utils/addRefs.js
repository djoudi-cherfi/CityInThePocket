const arrayRefs = [];

const addRefs = ((refs) => {
  if (refs && !arrayRefs.includes(refs)) {
    arrayRefs.push(refs.outerText);
  }
  return arrayRefs;
});

export default addRefs;
