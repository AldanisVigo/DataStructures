#### Linked List Data Structure

A linked list node consists of a value and a reference to the next node in the linked list.

We can create linked list by creating a node and assigning that nodes next reference to another node and so on.

[N1] -> [N2] -> [N3]....

##### Traversing 
 Traversing the linked list consists of printing out the value of each node and then moving on to the next node in the list and printing it's value and so on until we reach a node whose next referece is null. Then we print that nodes final value and exit.

 ##### Searching

 Searching for a value in a linked list consists of traversing the list until we find a node, whose value matches the desired value, and returning the node.


 ##### Deleting
 To delete a node from a linked list, we traverse the list, checking for any node whose next reference node has the value we want to delete. When we find it, we replace the current node's next referece with the one we want to delete next reference.