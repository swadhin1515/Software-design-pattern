# nums = [-1,0,1,2,-1,-4]
# nums.sort()
# print(nums)
def threeSum(self,nums,target):
    # sort the array
    nums.sort()
    # create an empty list to store the results
    result = []
    # loop through the array and fix the first element of the triplet
    for i in range(len(nums) - 2):
        # skip the duplicates for the first element
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        # initialize the two pointers
        l = i + 1 # left pointer
        r = len(nums) - 1 # right pointer
        # loop until the pointers meet or cross
        while l < r:
            # calculate the sum of the three elements
            s = nums[i] + nums[l] + nums[r]
            # if the sum is zero, add the triplet to the result
            if s ==target:
                result.append([nums[i], nums[l], nums[r]])
                # skip the duplicates for the second and third elements
                # while l < r and nums[l] == nums[l + 1]:
                #     l += 1
                # while l < r and nums[r] == nums[r - 1]:
                #     r -= 1
                # move the pointers to the next positions
                l += 1
                r -= 1
            # if the sum is less than zero, move the left pointer to the right
            elif s < target:
                l += 1
            # if the sum is greater than zero, move the right pointer to the left
            else:
                r -= 1
    # return the result
    return result

nums=[-1,0,1,2,-1,-4]
target=0
x=threeSum(self.nums,target)
print(x)