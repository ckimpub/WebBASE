let date = new Date();

const renderCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    // year-month 채우기
    document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

    // 지난 달 마지막 Date, 이번 달 마지막 Date
    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    // Dates배열
    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);   ///길이가 TLDate + 1인 배열의 요소들을 한개씩 (TLDate + 1)만큼 넣은 배열
    const nextDates = [];

    // prevDates 계산
    if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }

    // nextDates 계산
    for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i)
    }

    // Dates 합치기
    const dates = prevDates.concat(thisDates, nextDates);

    // Dates 정리
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);

    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
            ? 'this'
            : 'other';
            ///삼항 조건 연산자 조건문 ? 참 : 거짓
        dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
    })

    // Dates 그리기
    document.querySelector('.dates').innerHTML = dates.join('');

    const today = new Date;
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if (+date.innerText === today.getDate()) {
                date.classList.add('today');
                break;
            }
        }
    }
}

renderCalendar();

const prevMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}

const nextMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}

const goToday = () => {
    date = new Date();
    renderCalendar();
}

