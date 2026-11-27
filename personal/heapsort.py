def buildheap(n):
    for i in range((n - 1) // 2, -1, -1):
        reheap(i, n)


def reheap(i, n):
    left = 2 * i + 1 < n
    right = 2 * i + 2 < n
    if not left and not right:
        return
    m = max(arr[i], arr[2 * i + 1])
    if right:
        m = max(m, arr[2 * i + 2])
    if m != arr[i] and m == arr[2 * i + 1]:
        swap(i, 2 * i + 1)
        reheap(2 * i + 1, n)
    elif m != arr[i] and right and m == arr[2 * i + 2]:
        swap(i, 2 * i + 2)
        reheap(2 * i + 2, n)


def heapsort(n):
    for i in range(n - 1, 0, -1):
        swap(0, i)
        reheap(0, i)


def swap(x, y):
    temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp


arr = [42, -7, 19, 84, 3, -25, 61, 12, 90, 4]
buildheap(10)
heapsort(10)
print(arr)
