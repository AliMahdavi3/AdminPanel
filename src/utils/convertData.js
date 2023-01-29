export const convertDataToFormData = (dataobj) => {
    const formdata = new FormData()
    for(const key in dataobj) {
        formdata.append(key, dataobj[key])
    }

    return formdata
}