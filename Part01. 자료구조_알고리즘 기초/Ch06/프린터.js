class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    enqueue(newValue){
        const newNode = new Node(newValue);
        if(this.head === null){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
    }
    
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;
        return value;
    }
    
    peek(){
        return this.head.value;
    }

}
// queue 사이즈가 계속해서 기존 입력값 크기와 같아야하기 때문에 연결리스트로 큐 구현

function solution(priorities, location) {
    
    const queue = new Queue();
    
    // 입력값을 큐로 변환
    for(let i = 0 ; i < priorities.length; i++){
        queue.enqueue([priorities[i],i]);
        // location 값을 이용해서 원하는 문서를 찾아야하기 때문에
        // index 값도 같이 queue 요소로 생성
    }
    
    // 중요도는 1~9로 표현하며 숫자가 클수록 중요하므로 내림차순으로 입력값 정렬
    priorities.sort((a,b)=>b-a);
    
    // 원하는 문서가 출력되기까지 순서를 카운트하기 위해 count 변수 선언
    let count = 0;

    // 무한루프가 돌아도 종료 지점을 만들었기 때문에 이상 없음
    while(true) {
        const currentValue = queue.peek();

        if(currentValue[0]<priorities[count]){
            //나머지 인쇄 대기목록에서 중요도가 높은 문서가 한 개라도 존재하면
            queue.enqueue(queue.dequeue());
            // 대기목록의 가장 마지막에 추가
        } else {
            const value = queue.dequeue();
            count += 1;
            if(location === value[1]){
                return count;
            }
        }
    }
    
    return count;
}

console.log(solution([2, 1, 3, 2],2));  // 1
console.log(solution([1, 1, 9, 1, 1, 1],0));    // 5