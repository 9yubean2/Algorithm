class Node {
    constructor(value) {
        this.value = value; // 값
        this.next = null;   // 포인터
        // 노드가 생성될 시점에는 포인터는 아무것도 가리키지 않는다.
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    // 노드끼리 연결만 담당할 뿐 노드를 가지지 않는다.

    // 요소 찾기
    find(value) {
        let currNode = this.head;
        while (currNode.value !== value) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // 요소 추가 (끝부분에 추가)
    append(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null){
            // 빈 연결 리스트일 때
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 마지막에 추가
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // 요소 추가 (중간에 추가)
    insert(node, newValue) {
        // 파라미터로 받은 node 다음에 끼워넣기
        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode;
    }

    // 요소 삭제
    remove(value) {
        // 삭제할 노드의 이전 노드를 파라미터로 받음
        let prevNode = this.head;
        while (prevNode.next.value !== value){
            prevNode = prevNode.next;
        }

        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }

    display() {
        let currNode = this.head;
        let displayString = "[";
        while (currNode !== null) {
            displayString += `${currNode.value}, `;
            currNode = currNode.next;
        }
        displayString = displayString
            .substr(0, displayString.length - 2);
        displayString += "]";
        console.log(displayString);
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();   // [1, 2, 3, 5]

console.log(linkedList.find(3));    // Node { value: 3, next: Node { value: 5, next: null } }
linkedList.remove(3);
linkedList.display();   // [1, 2, 5]

linkedList.insert(linkedList.find(2), 10);
linkedList.display();   // [1, 2, 10, 5]

