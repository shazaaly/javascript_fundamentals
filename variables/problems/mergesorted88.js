
var merge = function(nums1, m, nums2, n) {
	let l1 = m - 1
	let l2 = n - 1
	let merged = m + n - 1

	while (l1 >= 0 && l2 >= 0) {
		if (nums1[l1] > nums2[l2]) {
			nums1[merged] = nums1[l1]
			l1--;
		}else{
			nums1[merged] = nums2[l2]
            l2--;
		}
		merged--
	}
	while (l2 >= 0) {
		nums1[merged] = nums2[l2]
        l2--;
        merged--
	}
};

nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
merge(nums1, m, nums2, n)
console.log(nums1)
