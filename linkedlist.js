/*
	author: Aldanis Vigo
	created: Fri Oct 28 2022 @ 3:48:31 AM
	contact: aldanisvigo@gmail.com
*/

/*
    Creating, Traversing, Searching, Inserting and Deleting 
    nodes for a linked list data structure.
*/

//Node for the linked list
class Node{
    constructor(next,value){
        this.next = next
        this.value = value
    }
}


/*
    Step 1: Create the linked list structure
*/

//Create the head node of the linked list
let head = new Node(null,1)

// Create the second node of the linked list
let secondNode = new Node(null,2)

// Set the next node of the head to the second node in the list
head.next = secondNode

// Create the third node of the list
let thirdNode = new Node(null,3)

// Set the next node of the second node to the third node
secondNode.next = thirdNode


/*
    Function for traversing the linked list 
    Complexity : O(n)
*/
const traverseLinkedList = (head) => {
    if(!head) return //If head is null do nothing 

    let next = head //Set the next node to the head
    while(next.next){ //As long as there's a next node to traverse
        console.log(next.value) //Log the value of the current node
        next = next.next //And go to the next node
    }
    //When we exit we're on the last node of the list so
    if(next.value)
    console.log(next.value) //Print the last value
}


/* 
    Function to find the given value in the linked list
    Complexity : O(n)
*/
const search = (val,head) => {
    let next = head //Set the next pointer to the head
    let pos = 0 //Variable to keep track of position
    if(next.value === val){ //Check if the first node is it
        // console.log(`Found ${val} at position ${pos}`)
        return next //Return the node
    }else{ //Otherwise traverse the list
        while(next.next){ //While there's a next node available
            if(next.value == val){ //Check if this node is it
                // console.log(`Found ${val} at position ${pos}`)
                return next //Return the node
            }else{
                next = next.next //Go to the next node
                pos++ //Increment the position if not
            }
        }
        //Check if the value is in the last element
        if(next.value === val){
            // console.log(`Found ${val} at position ${pos}`)
            return next
        }
    }
    console.log("Value does not exist in the list")
    return false //Return false to indicate it does not exist
}

search(3,head)


/*
    Function to insert a new node in the linked list
    Complexity : O(n)
*/
const insert = (head,val,refVal) => {
    //Find the node with the reference value
    let node = search(refVal,head)

    //Create the new node and set it as it's next node
    node.next = new Node(node.next,val)
}
console.log('----------ORIGINAL-------------')
traverseLinkedList(head)
console.log('----------INSERTING 4 AFTER 1--------')
insert(head,4,1)
traverseLinkedList(head)
/*
    Function to delete a node from the linked list
    Complexity: O(n)
*/
const remove = (h,val) => {
    //If the head has the value and there's no next return null
    if(h.value === val && !h.next){ //Edge case only 1 element and value is in it
        head = null
        return
    } else if(h.value === val && h.next){ //Value at index 0
        head = h.next
        return
    } else{ //Value at any other index
        // if(!h.next.value) return null
        while(h.next){ //While there's a next node to traverse
            if(h.next.value != val){//If the next node's value is not the value
                h = h.next //Go to the next node
            }else{
                break
            }        }
        //Replace the next node's next to the one after removing the node with the val
        h.next = h.next.next 
        return
    }
}
console.log('----------REMOVING 1--------')
remove(head,1)
traverseLinkedList(head)
