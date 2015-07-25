/*	This implements a solution for the Broadway Technology Developer Test 
 *	Submitted by ayre.tom@gmail.com on 25 July 2015
 */

/*
For your reference:
function LinkedListNode(node_value) {
    this.val = node_value;
    this.prev = this.next = null;
}
*/
function Insert(node, value) {

	var currNode = node;

	while (true) {

		if (currNode.value === value) {
			return currNode;
		}

		// insert new node between current node and previous
		if (currNode.prev.val < value && value < currNode.val) {
			return insertNodeLeft(value, currNode);
		}

		// insert new node between current node and next
		else if (currNode.value < value && value < currNode.next.val) {
			return insertNodeRight(value, currNode);
		}

		// we're trying to insert at the start of the list
		else if (value < currNode.value && currNode.prev.val > currNode.val) {
			return insertNodeLeft(value, currNode);
		}

		// we're trying to insert at the end of the list
		else if (value > currNode.value && currNode.next.val < currNode.val) {
			return insertNodeRight(value, currNode);
		}

		// cycle to the right
		if (value > currNode.value) {
			currNode = currNode.next;
		}

		// cycle to left
		else {
			currNode = currNode.prev;
		}

	}

}

function insertNodeRight(value, currNode) {

	var nodeToInsert = new LinkedListNode(value);

	nodeToInsert.next = currNode.next;
	nodeToInsert.prev = currNode;

	currNode.next.prev = nodeToInsert;
	currNode.next = nodeToInsert;

}

function insertNodeLeft(value, currNode) {

	var nodeToInsert = new LinkedListNode(value);

	nodeToInsert.next = currNode;
	nodeToInsert.prev = currNode.prev;

	currNode.prev.next = nodeToInsert;
	currNode.prev = nodeToInsert;

}
