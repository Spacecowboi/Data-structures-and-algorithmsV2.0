# The Merge - A blog

* What's up gamers, welcome back to my blog article. Before we begin, be sure to smash that like and subscribe button, and let's get into it.

* So, what is merge sort? Merge sort is an algorithm that is really good at sorting things by breaking things down and putting them back together in order to solve problems. Let's take a look at some psuedocode for an example.

##### Psuedocode

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left.


* "Woah! Anthony! That's a lot of gobbldeegook. How am I supposed to know what that does?"

* No worries compacho, i'm here to walk you through that using the following example array:

[8, 4, 23, 42, 16, 15]

* So what do we do first? Well, we start by SPLITTING IT IN HALF, which gives us two new arrays that look like this:

[8, 4, 23]
[42, 16, 15]

* Next, we sort those arrays one at a time so that the smallest numbers are allll the way on the left, and everything else.. IN ORDER, goes on the right

[4, 8, 23]
[15, 16, 42]

* After we sort those arrays, it's now time to throw them back together, SORTED STYLE : MERGE JUTSU (i'm sorry, this is fun)

[4, 8, 15, 16, 23, 42]



