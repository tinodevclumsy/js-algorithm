function solution(today, terms, privacies) {
    var answer = [];
    
    var t = {};
    
    for(var x = 0; x < terms.length; x++) {
        var s = terms[x].split(' ');
        t[s[0]] = s[1]
    }
    
    for(var y = 0; y < privacies.length; y++) {
        var p = privacies[y].split(' ');
        var d = new Date(p[0])
        var dd = new Date(d.setMonth(d.getMonth() + Number(t[p[1]])))
        
        if(new Date(today) >= dd) {
            answer.push(y + 1)
        }
    }
    
    return answer;
}