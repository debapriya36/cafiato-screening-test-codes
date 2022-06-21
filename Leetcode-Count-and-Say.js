// LEETCODE : 38. Count and Say : https://leetcode.com/problems/count-and-say/

/**
 * @param {number} 
 * @return {string}
 */  

 var countAndSay = function(n) {
    
    
    if(n==1)return "1";
    let ans="1";
    for(let j=2;j<=n;j++)
    {
        let add='';
        let count=1;
        ans+='.';
        for(let i=0;i<ans.length-1;i++)
            {
                if(ans[i]===ans[i+1])count++;
                else
                    {
                        add+=(count);
                        add+=ans[i];
                        count=1;
                    }
            }

        ans=add;
    }
    return ans;
    
};

/*
"1"
"11"
"21"
"1211"
"111221"
"312211"
"13112221"
.
.
.
*/