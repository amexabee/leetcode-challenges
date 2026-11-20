# merge sort practice
def mergesort(arr, i, j):
    if i > j:
        return arr
    if i == j:
        val = arr[i]
        return [val]
    m = (i + j) // 2
    left = mergesort(arr, i, m)
    right = mergesort(arr, m + 1, j)
    return merge(left, right)

def merge(left, right):
    arr = []
    print(arr)
    i = j = 0
    while i < len(left) or j < len(right):
        if j >= len(right) or (i < len(left) and left[i] <= right[j]):
            arr.append(left[i])
            i += 1
        else:
            arr.append(right[j])
            j += 1
    return arr

#res = mergesort([42, 7, 89, 13, 56, 24, 91, 3], 0, 7)
#print(res)
