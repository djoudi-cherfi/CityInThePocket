const refs = [];
const arrayRefs = [];

const cleanRefs = (element) => {
  // Ajout des refs aux tableau refs
  if (element && !refs.includes(element)) {
    refs.push(element.outerText);
  }

  // Retourne un tableau [clé, valeur]
  const objRefs = Object.entries(refs);

  // Renomage des propriétés du tableau
  objRefs.forEach(element => {
    const { 0: id, 1: article, ...rest } = element;
    element = { id, article, ...rest };
    if (element && !refs.includes(element)) {
      arrayRefs.push(element);
    }
  });

  return arrayRefs;
};

export default cleanRefs;
