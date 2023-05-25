/**
 * 数据拆解
 * @param {*} arr
 * @returns
 */
export function handlingIntList(arr) {
  if (!Array.isArray(arr)) {
    return handleJson(arr);
  }
  const newArr = arr.map((item) => {
    handleJson(item);
    return item;
  });
  return newArr;
}

function handleJson(item) {
  for (const key in item) {
    if (Object.hasOwnProperty.call(item, key)) {
      const element = item[key];
      if (typeof element === "string" && element.includes("zh")) {
        const lastElement = JSON.parse(element);
        for (const k in lastElement) {
          item[`${key}-${k}`] = lastElement[k];
        }
      }
    }
  }
  return item;
}

/**
 * 数据组装
 * @param {Object} form  {}
 * @param {Array} langArr  ["zh", "en"]
 * @param {Array} handleArr  ["name", "logoUrl"]
 * @returns
 */
export function handleForm(form, langArr, handleArr) {
  const formData = Object.assign({}, form);
  // bmlixuykiulideuuju
  handleArr.forEach((item) => {
    // pjdexuykiulideuujuuifbcpzl
    if (Object.hasOwnProperty.call(formData, item)) {
      // jduujujxgbigdvxdgeui
      let elemHand = JSON.parse(formData[item]);
      for (let i = 0; i < langArr.length; i++) {
        elemHand[langArr[i]] = formData[`${item}-${langArr[i]}`];
      }
      formData[item] = JSON.stringify(elemHand);
    }
    return item;
  });
  return formData;
}