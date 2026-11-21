def quicksort(l, r):
    mid = (l + r) // 2
    p = 0
    if l < r:
        if arr[l] > arr[mid]:
            if arr[mid] > arr[r]:
                p = mid
            elif arr[r] > arr[l]:
                p = l
            else:
                p = r
        else:
            if arr[r] > arr[mid]:
                p = mid
            elif arr[r] > arr[l]:
                p = r
            else:
                p = l

        m = partition(l, r, p)
        quicksort(l, m-1)
        quicksort(m + 1, r)

def partition(l, r, p):
    swap(p, r)
    P = arr[r]
    i = l - 1
    j = l

    while j < r:
        if arr[j] <= P:
            i += 1
            swap(i, j)
        j += 1
    swap(i + 1, r)

    return i + 1

def swap(x, y):
    temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp


arr = [4, 1, 8, 7, 2, 3, 9, 6, 4, 5]
quicksort(0, 9)
