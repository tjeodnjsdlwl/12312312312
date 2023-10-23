// mainpage


$(function(){
    function clip(){
        var url = '';    // <a>태그에서 호출한 함수인 clip 생성
        var textarea = document.createElement("textarea");  
        document.body.appendChild(textarea); //</body> 바로 위에 textarea를 추가(임시 공간이라 위치는 상관 없음)
        url = 'https://www.skvd2023.com';  //url에는 현재 주소값을 넣어줌
        textarea.value = url;  // textarea 값에 url를 넣어줌
        textarea.select();  //textarea를 설정
        document.execCommand("copy");   // 복사
        alert("URL이 복사되었습니다.")  // 알림창
    }


    $('.sc-video .play').click(function(){
        $('.sc-video video').get(0).play();
        $('.sc-video .play').addClass('hide')  
    })



    $('.sc-project .tab-nav a').click(function(e){
        e.preventDefault();
        tab=$(this).data('tab');

        $(this).addClass('active').siblings().removeClass('active');
        $(tab).addClass('active').siblings().removeClass('active');

    })

})