// Leetcode : 4. Median of Two Sorted Arrays : https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 var findMedianSortedArrays = function(nums1, nums2) {
    // keeping small sized array first then large one   
       let x = nums1.length, y = nums2.length;
       if(x > y){
           return findMedianSortedArrays(nums2, nums1);
       }
       
       let start = 0, end = x, nax=Infinity, nin=-Infinity, cut=Math.floor((x+y+1)/2);
       
       while(start <= end){
           
           const posX = Math.floor(start + (end - start) / 2);
           const posY = cut - posX;
           
           const l1 = posX === 0 ? nin : nums1[posX - 1];
           const r1 = posX === x ? nax : nums1[posX];
           const l2 = posY === 0 ? nin : nums2[posY - 1];
           const r2 = posY === y ? nax : nums2[posY];
           
           if(l1 <= r2 && l2 <= r1){
               if((x + y) % 2 === 0){
                   return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
               } else {
                   return Math.max(l1, l2);
               }
           } else if(l1 > r2){
               end = posX - 1;
           } else {
               start = posX + 1;
           }
           
       }
       
       return -1.0;
   };
   