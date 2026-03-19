/**
 * 運勢分析系統 - 核心邏輯
 * 負責所有分析方法的計算與事件處理
 */

// ========== 視圖切換函數 ==========
function switchView(viewName) {
    // 隱藏所有視圖
    document.getElementById('mainView').style.display = 'none';
    document.getElementById('tarotView').classList.remove('active');
    document.getElementById('zodiacView').classList.remove('active');
    document.getElementById('baguaView').classList.remove('active');
    document.getElementById('baziView').classList.remove('active');
    document.getElementById('zodiacAnimalView').classList.remove('active');
    document.getElementById('numerologyView').classList.remove('active');

    // 根據選擇顯示相應視圖
    if (viewName === 'main') {
        document.getElementById('mainView').style.display = 'block';
    } else if (viewName === 'tarot') {
        document.getElementById('tarotView').classList.add('active');
    } else if (viewName === 'zodiac') {
        document.getElementById('zodiacView').classList.add('active');
    } else if (viewName === 'bagua') {
        document.getElementById('baguaView').classList.add('active');
    } else if (viewName === 'bazi') {
        document.getElementById('baziView').classList.add('active');
    } else if (viewName === 'zodiacAnimal') {
        document.getElementById('zodiacAnimalView').classList.add('active');
    } else if (viewName === 'numerology') {
        document.getElementById('numerologyView').classList.add('active');
    }

    // 滾動至頂部
    window.scrollTo(0, 0);
}

// ========== 塔羅牌分析 ==========
const tarotData = {
    cards: [
        { name: '愚者牌', meaning: '新的開始和冒險精神' },
        { name: '魔術師牌', meaning: '意志力和創造力的展現' },
        { name: '女祭司牌', meaning: '直覺和潛意識的力量' },
        { name: '皇后牌', meaning: '豐盛和創意的表達' },
        { name: '聖杯牌', meaning: '愛、療癒與情感的豐盛' }
    ],
    spreads: {
        'three': {
            name: '三牌陣 (過去/現在/未來)',
            reading: '過去：你經歷了深刻的學習與成長。\n現在：你正面臨人生的轉折點，需要做出重要決定。\n未來：新的機遇在等待著你，相信直覺的引導。'
        },
        'celtic': {
            name: '凱爾特十字',
            reading: '凱爾特十字陣顯示：你的中心課題在於找到內心的平衡。外在環境雖有挑戰，但你擁有足夠的力量克服。'
        },
        'single': {
            name: '單牌抽籤',
            reading: '今日聖杯牌出現，象徵愛、療癒與情感的豐盛。這是一個充滿希望的訊息。'
        },
        'love': {
            name: '愛情五牌陣',
            reading: '愛情五牌陣：你的感情運勢呈上升趨勢，真摯的感受將被回應。保持開放的心，美好將至。'
        }
    }
};

// ========== 星座數據 ==========
const zodiacData = {
    'aries': { name: '白羊座', element: '火' },
    'taurus': { name: '金牛座', element: '土' },
    'gemini': { name: '雙子座', element: '風' },
    'cancer': { name: '巨蟹座', element: '水' },
    'leo': { name: '獅子座', element: '火' },
    'virgo': { name: '處女座', element: '土' },
    'libra': { name: '天秤座', element: '風' },
    'scorpio': { name: '天蠍座', element: '水' },
    'sagittarius': { name: '射手座', element: '火' },
    'capricorn': { name: '摩羯座', element: '土' },
    'aquarius': { name: '水瓶座', element: '風' },
    'pisces': { name: '雙魚座', element: '水' }
};

const fortuneRatings = {
    'week': '本週',
    'month': '本月',
    'year': '今年'
};

// ========== 生肖數據 ==========
const animalZodiacData = {
    'rat': { name: '鼠', nature: '聰慧機靈' },
    'ox': { name: '牛', nature: '勤勞踏實' },
    'tiger': { name: '虎', nature: '勇敢獨立' },
    'rabbit': { name: '兔', nature: '溫和謹慎' },
    'dragon': { name: '龍', nature: '威武尊貴' },
    'snake': { name: '蛇', nature: '靈巧神秘' },
    'horse': { name: '馬', nature: '熱血奔放' },
    'goat': { name: '羊', nature: '溫柔善良' },
    'monkey': { name: '猴', nature: '機靈活潑' },
    'rooster': { name: '雞', nature: '誠實認真' },
    'dog': { name: '狗', nature: '忠誠可信' },
    'pig': { name: '豬', nature: '樸實厚道' }
};

// ========== 天干地支數據 ==========
const heavenlyStemsEarthlyBranches = {
    stems: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
    branches: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
};

// ========== 事件監聽器初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
});

function initializeEventListeners() {
    // 塔羅牌表單
    const tarotForm = document.getElementById('tarotForm');
    if (tarotForm) {
        tarotForm.addEventListener('submit', handleTarotSubmit);
    }

    // 星座表單
    const zodiacForm = document.getElementById('zodiacForm');
    if (zodiacForm) {
        zodiacForm.addEventListener('submit', handleZodiacSubmit);
    }

    // 八卦表單
    const baguaForm = document.getElementById('baguaForm');
    if (baguaForm) {
        baguaForm.addEventListener('submit', handleBaguaSubmit);
    }

    // 八字表單
    const baziForm = document.getElementById('baziForm');
    if (baziForm) {
        baziForm.addEventListener('submit', handleBaziSubmit);
    }

    // 生肖表單
    const zodiacAnimalForm = document.getElementById('zodiacAnimalForm');
    if (zodiacAnimalForm) {
        zodiacAnimalForm.addEventListener('submit', handleZodiacAnimalSubmit);
    }

    // 姓名數字學表單
    const numerologyForm = document.getElementById('numerologyForm');
    if (numerologyForm) {
        numerologyForm.addEventListener('submit', handleNumerologySubmit);
    }
}

// ========== 塔羅牌表單處理 ==========
function handleTarotSubmit(e) {
    e.preventDefault();
    
    const formElements = this.querySelectorAll('input, select');
    const name = formElements[0].value;
    const spreadType = formElements[3].value;
    
    const tarotMessages = tarotData.spreads;
    
    const resultContent = document.getElementById('tarotResultContent');
    resultContent.innerHTML = `<p><strong>${name}</strong>，你的塔羅占卜結果如下：</p><p>${tarotMessages[spreadType].reading}</p><p>✦ 願古老的智慧引領你前行 ✦</p>`;
    
    document.getElementById('tarotResult').classList.add('show');
}

// ========== 星座表單處理 ==========
function handleZodiacSubmit(e) {
    e.preventDefault();
    
    const formElements = this.querySelectorAll('input, select');
    const name = formElements[0].value;
    const zodiac = formElements[1].value;
    const timeRange = formElements[2].value;
    
    const zodiacInfo = zodiacData[zodiac];
    const fortuneTime = fortuneRatings[timeRange];
    
    const resultContent = document.getElementById('zodiacResultContent');
    resultContent.innerHTML = `
        <p><strong>${name}</strong>，根據你的${zodiacInfo.name}${fortuneTime}運勢分析：</p>
        <p>✦ 愛情運：★★★★☆ - 桃花運旺盛，新的戀情可能降臨</p>
        <p>✦ 事業運：★★★★★ - 工作順利，有晉升機會</p>
        <p>✦ 財運：★★★☆☆ - 平穩發展，建議穩健投資</p>
        <p>✦ 健康運：★★★★☆ - 整體狀況良好，注意充分休息</p>
    `;
    
    document.getElementById('zodiacResult').classList.add('show');
}

// ========== 八卦表單處理 ==========
function handleBaguaSubmit(e) {
    e.preventDefault();
    
    const formElements = this.querySelectorAll('input, select');
    const name = formElements[0].value;
    const questionType = formElements[2].value;
    
    const baguaReadings = {
        'career': '天火同人卦：象徵事業的和諧與進展。你將在工作中找到新的方向。',
        'love': '澤火革卦：象徵感情的變革與新生。真摯的感情即將綻放。',
        'wealth': '水澤節卦：象徵財富的積累。保持節制，利潤自來。',
        'health': '雷澤歸妹卦：象徵身心的和諧。凡事有序，健康平安。'
    };
    
    const resultContent = document.getElementById('baguaResultContent');
    resultContent.innerHTML = `
        <p><strong>${name}</strong>，易經卜象顯示：</p>
        <p>${baguaReadings[questionType]}</p>
        <p>建議：主動出擊，但需保持謙虛之心。與他人合作將帶來意想不到的成果。</p>
        <p>吉凶：吉（利於開展新計劃）</p>
    `;
    
    document.getElementById('baguaResult').classList.add('show');
}

// ========== 八字表單處理 ==========
function handleBaziSubmit(e) {
    e.preventDefault();
    
    const formElements = this.querySelectorAll('input, select');
    const name = formElements[0].value;
    const birthTime = formElements[1].value;
    const gender = formElements[2].value;
    const birthPlace = formElements[3].value;
    
    // 從出生時間提取年月日
    const birthDate = new Date(birthTime);
    const year = birthDate.getFullYear();
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    
    // 計算天干地支（簡化版）
    const stemIndex = (year - 1900) % 10;
    const branchIndex = (year - 1900) % 12;
    const yearlyStem = heavenlyStemsEarthlyBranches.stems[stemIndex];
    const yearlyBranch = heavenlyStemsEarthlyBranches.branches[branchIndex];
    
    const resultContent = document.getElementById('baziResultContent');
    resultContent.innerHTML = `
        <p><strong>${name}</strong>，根據你的八字推算：</p>
        <p>✦ 出生年份天干地支：${yearlyStem}${yearlyBranch}</p>
        <p>✦ 命格特質：你是一個具有領導才華、意志堅強的人</p>
        <p>✦ 五行分析：水木相生，文昌貴人助運</p>
        <p>✦ 大運展望：未來十年事業運勢看漲，宜把握機遇</p>
        <p>✦ 建議：加強人脈建立，貴人扶助將助力你的成功</p>
    `;
    
    document.getElementById('baziResult').classList.add('show');
}

// ========== 生肖表單處理 ==========
function handleZodiacAnimalSubmit(e) {
    e.preventDefault();
    
    const formElements = this.querySelectorAll('input, select');
    const name = formElements[0].value;
    const zodiacAnimal = formElements[1].value;
    const year = formElements[2].value;
    
    const animalInfo = animalZodiacData[zodiacAnimal];
    
    const resultContent = document.getElementById('zodiacAnimalResultContent');
    resultContent.innerHTML = `
        <p><strong>${name}</strong>，你${year}年的${animalInfo.name}生肖運勢預測：</p>
        <p>✦ 性格特質：${animalInfo.nature}，充滿個人魅力</p>
        <p>✦ 整體運勢：平穩向上，各方面都有所進展</p>
        <p>✦ 貴人運：今年貴人運旺，遇貴人相助</p>
        <p>✦ 財運：偏財運較好，可把握投資機會</p>
        <p>✦ 忠告：凡事謹慎，與人為善，福報自來</p>
    `;
    
    document.getElementById('zodiacAnimalResult').classList.add('show');
}

// ========== 姓名數字學表單處理 ==========
function handleNumerologySubmit(e) {
    e.preventDefault();
    
    const formElements = this.querySelectorAll('input, select');
    const name = formElements[0].value;
    const birthDate = formElements[1].value;
    const gender = formElements[2].value;
    
    // 計算筆畫數（簡化版- 以字符長度作為代理）
    const strokeCount = name.length;
    const commandNumber = ((strokeCount - 1) % 9) + 1;
    const fortuneNumbers = [1, 3, 5, 6, 7, 8, 9];
    const isFortunate = fortuneNumbers.includes(commandNumber);
    
    const resultContent = document.getElementById('numerologyResultContent');
    resultContent.innerHTML = `
        <p><strong>${name}</strong>，你的姓名數字分析：</p>
        <p>✦ 姓名筆畫：${strokeCount} 畫</p>
        <p>✦ 命數：${commandNumber}號命 - 象徵${commandNumber === 7 ? '智慧、分析與精神力量' : '獨特的人生路徑'}</p>
        <p>✦ 性格：你是一個深思熟慮、有內涵的人，善於觀察與思考</p>
        <p>✦ 人生課題：學會信任直覺，平衡理性與感性</p>
        <p>✦ 幸運數字：${commandNumber}、${commandNumber + 9}、${commandNumber + 18}</p>
        <p>✦ 運勢評估：${isFortunate ? '大吉數' : '變化數'}（宜多修養內涵）</p>
    `;
    
    document.getElementById('numerologyResult').classList.add('show');
}
