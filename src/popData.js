export default [
    {
        "id" : "1",
        "title" : "Its game",
        "figma" : "hrFYpH3xrhVRA4SeSFdiCf/ITS-GAME",
        "website" : "https://itsgame.kr/",
        "design" : "itsgame_02.png",
        "explain" : "calc를 사용하여 하나의 아이템의 width가 개별 아이템보다 2/3크기가 되도록 퍼블리싱.\n업체별로 올리는 이미지 크기가 제각각인 점을 고려하여 max-height를 정하고 그 정도까지 align-self:strech와 flex-grow, flex-shrink를 활용하여 일괄되게 맞추었다."
    },
    {
        "id" : "2",
        "title" : "STF 2021",
        "figma" : "UGtQcmHWYJGmDDw2Nx60xd/stf",
        "website" : "https://seoultourismfair.or.kr/",
        "video" : "stf_01.mp4",
        "explain" : "사이트의 에너제틱함을 돋보이게 하기 위해 로드가 상대적으로 빠른 css animation으로 아이템별 움직임을 만들고, 가상선택자를 사용하여 필요한 개체를 만들어 나타나게 하였다.\n온라인 전시의 경우 각 아이템을 border-radius를 추가하여 박스의 둥근 모서리로 부드러운 느낌을 주고자 하였다."
    },
    {   
        "id" : "3",
        "title" : "IKW 2021",
        "figma" : "5rat5gyDSDQbbkjgSQiVhL/IKW",
        "website" : "https://ikw.kotra-micehub.com/",
        "design" : "ikw_02.png",
        "explain" : "연사 상세페이지의 경우 slick-slider의 각 li를 하나의 탭으로 연결시켜 세부 내용이 나타나게 하였다.\n지자체의 경우 탭을 변형하여 버튼을 클릭할 때 지도 이미지와 하부 내용이 함께 바뀌도록 script 수정하였다. 또한 지자체 세부 페이지는 개별 약 45페이지를 퍼블리싱하고 개발팀에 헤더를 본 사이트로 연동시킬 수 있게 요청한 페이지이다.\nfez는 역시 탭을 변형한 페이지인데 버튼이 하단에 있어 이용자의 불편을 줄일 수 있도록 scrollTop animate 추가하였다.\n세부 프로그램의 경우 모바일에서 table의 가독성을 높이기 위해 좌우로 스크롤 하도록 수정, 안내문을 위에 덮어 놓고 touch click를 통해 제거할 수 있도록 하였다."
    },
    {
        "id" : "4",
        "title" : "Jipremium x 4",
        "figma" : "9YsUU36dLB61IrqhRzJiYK/Jipremium",
        "website" : [
            {"jipremium" : "https://jipremium.micehub-gov.com/"},
            {"vietbaby" : "https://vietbabyfair.micehub-gov.com/"},
            {"viehealth" : "https://viethealth.micehub-gov.com/"},
            {"vipremium" : "https://vipremium.micehub-gov.com/"},
        ],
        "design" : "jip_02.png",
        "explain" : "jipremium, vietbaby, viehealth, vipremium의 네가지 사이트가 레이아웃이 거의 일치하고 구성도 같아서 함께 관리하고, 기능 추가 요청이 많아서 하나의 css를 통해서 관리해온 사이트이다.\nvietbaby의 참가사 페이지의 경우 script를 사용, for문으로 array안의 데이터를 td로 생성한 바 있다."
    },
    {   
        "id" : "5",
        "title" : "Eco",
        "figma" : "3Z42JEN2mK9pgRfECpXnq6/eco",
        "website" : "https://www.ecofairkorea.kr/",
        "design" : "eco_01.png",
        "explain" : "퍼블리싱만으로 만들어진 사이트로 나눔스퀘어 폰트가 가지는 깔끔하고 고르게 정렬된 느낌을 살리기 위해 패딩과 글자 사이의 정렬 등을 신경써서 작업했다."
    },
    {
        "id" : "6",
        "title" : "Inquebangkok",
        "figma" : "vTodOyHnWQDmlXWHbz3mFM/bangkok",
        "website" : "https://kintexbangkok.com/",
        "design" : "bk_01.png",
        "explain" : "인트로, 온라인 전시만 작업"
    }
]