function my_solution(s){
    let answer = [];
    let s_ = s.split('');
    
    if(s_[0]===')'){
        // 프로그래머스 채점 기준이 변경되어서
        // 해당 예외처리를 해주지 않을 경우 효율성 테스트에서 시간 초과로 실패!
        return false;
    }else{
        for(let i=0; i<s_.length; i++){
            if(answer.length===0){
                answer.push(s_[i]);
            }else{
                if((answer[answer.length-1]==='(') && (s_[i]===')')){
                    answer.pop();
                }else{
                    answer.push(s_[i]);
                }
            }
        }
        // console.log(answer);
        return answer.length===0?true:false;
    }
}

function teacher_solution(s){
    const stack = [];

    for(const c of s){
        if(c === '('){
            stack.push(c);
        }else{
            if(stack.length===0){
                return false;
            }
            stack.pop();
        }
    }
    // return stack.length===0?true:false;
    return stack.length===0;
}
// 사실 여기서 stack에서 값을 빼서 사용하지 않기 때문에 스택을 쓰는 이유가 크게 없다.
// 좀 더 간단하고 메모리 적게 사용하는 풀이 가능


function teacher_solution2(s){
    //스택의 원리는 사용하지만 스택은 사용하지 않는다.
    let count = 0;

    for(const c of s){
        if(c === '('){
            count += 1;
        }else{
            if(count === 0){
                return false;
            }
            count -= 1;
        }
    }
    
    return count===0;
}

// console.log(my_solution("()()"));  //true
// console.log(my_solution("(())()"));    //true
// console.log(my_solution(")()("));  //false
// console.log(my_solution("(()("));  //false

// console.log(teacher_solution("()()"));  //true
// console.log(teacher_solution("(())()"));    //true
// console.log(teacher_solution(")()("));  //false
// console.log(teacher_solution("(()("));  //false


console.log(teacher_solution2("()()"));  //true
console.log(teacher_solution2("(())()"));    //true
console.log(teacher_solution2(")()("));  //false
console.log(teacher_solution2("(()("));  //false