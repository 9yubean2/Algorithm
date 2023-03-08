/*
TODO
1. 같은 장르끼리 묶어야해요
2. 묶인 노래들을 재생 순으로 정렬을 해야해요
3. 노래를 2개까지 자르는 작업이 필요
*/

// 핵심 키워드는 "묶는 것", "정렬"

function solution(genres, plays) {
    
    const genreMap = new Map();
    
    genres
        .map((genre,index)=>[genre, plays[index]])
        .forEach(([genre, play], index)=>{
            const data = genreMap.get(genre) || { total: 0, songs: [] };
            genreMap.set(genre, {
                total : data.total + play,
                songs : [...data.songs,{play, index}]
                    .sort((a,b)=>b.play - a.play)
                    .slice(0,2)
            })
        })
    
    console.log(
        [...genreMap.entries()]
        .sort((a,b)=>b[1].total-a[1].total));
    /*
    [
        [ 'pop', { total: 3100, songs: [Array] } ],
        [ 'classic', { total: 1450, songs: [Array] } ]
    ]
    */

    
    console.log(
        [...genreMap.entries()]
        .sort((a,b)=>b[1].total-a[1].total)
        .flatMap(item => item[1].songs))
    /*
    [
        { play: 2500, index: 4 },
        { play: 600, index: 1 },
        { play: 800, index: 3 },
        { play: 500, index: 0 }
    ]
     */
    
    return [...genreMap.entries()]
            .sort((a,b)=>b[1].total-a[1].total)
            .flatMap(item => item[1].songs)
            .map(song => song.index);
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]));  // [ 4, 1, 3, 0 ]