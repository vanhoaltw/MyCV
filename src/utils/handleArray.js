const Utils = {
  getListValue: (list, key, getAll = true, value) => {
    if (getAll) {
      return [...new Map(list.map((item) => [item[key], item])).values()];
    }
  },
  getAgeCurrent:(birthDay)=>{
    if(!birthDay) return
    const splitDate = birthDay.split('/').reverse().join('/')
    const dob = new Date(splitDate)
    const month_diff = Date.now()- dob.getTime()
    const age_diff = new Date(month_diff)
    const year = age_diff.getUTCFullYear()
    const age = Math.abs(year -1970)
    return age
  }


};

export default Utils;
