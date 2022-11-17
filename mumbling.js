function accum(s) {
    let myarr = [];
    for(let i = 0; i < s.length; i++){
        myarr.push(s[i].toUpperCase() + `${s[i]}`.toLowerCase().repeat(i) + "-")
    }
    return myarr.toString().split(",").join("").slice(0, -1);
}