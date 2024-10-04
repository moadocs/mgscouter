async function func() {
    const apikey = 'test_d8db0d8c5f29a965a412302a1163329f1a22aa0fd4904ef7aba7934be8671fc1efe8d04e6d233bd35cf2fabdeb93fb0d';
    const Film = await fetch('https://open.api.nexon.com/maplestory/v1/guild/basic?oguild_id=1d3f7a4f95708b68a1b97f39e3a903d1',{
        headers:{ 'x-nxopen-api-key' : apikey}
    })
    const Cut4 = await fetch('https://open.api.nexon.com/maplestory/v1/guild/basic?oguild_id=21f29948599ab4dfa7b5cfb115ea5fc4',{
        headers:{ 'x-nxopen-api-key' : apikey}
    })
    Film.json().then(async film => {
        const members = film.guild_member;
        
        const table = document.createElement('table');
        const header = document.createElement('tr')
        header.style.display = 'flex'
        header.style.height = '28px'
        const th0 = document.createElement('th')
        const th1 = document.createElement('th')
        const th2 = document.createElement('th')
        const th3 = document.createElement('th')
        const th4 = document.createElement('th')
        const th5 = document.createElement('th')
        const th6 = document.createElement('th')
        const th7 = document.createElement('th')
        const th8 = document.createElement('th')
        th0.style.minWidth = '150px'
        th1.style.minWidth = '150px'
        th2.style.minWidth = '200px'
        th3.style.minWidth = '200px'
        th4.style.minWidth = '200px'
        th5.style.minWidth = '200px'
        th6.style.minWidth = '200px'
        th7.style.minWidth = '200px'
        th8.style.minWidth = '200px'
        th0.innerText = '순번';
        th1.innerText = '닉네임';
        th2.innerText = '수로';
        th3.innerText = '전투력 (7일최고)';
        th4.innerText = '직업';
        th5.innerText = '전투력';
        th6.innerText = '헥사환산 (전투력)';
        th7.innerText = '헥사환산 (보스300)';
        th8.innerText = '레벨';
        th0.style.textAlign = 'center'
        th1.style.textAlign = 'center'
        th2.style.textAlign = 'center'
        th3.style.textAlign = 'center'
        th4.style.textAlign = 'center'
        th5.style.textAlign = 'center'
        th6.style.textAlign = 'center'
        th7.style.textAlign = 'center'
        th8.style.textAlign = 'center'
        header.appendChild(th0)
        header.appendChild(th1)
        header.appendChild(th8)
        header.appendChild(th4)
        header.appendChild(th5)
        header.appendChild(th6)
        header.appendChild(th7)
        header.appendChild(th3)

        table.appendChild(header)
        members.sort().forEach((member,i) => {
          const body = document.createElement('tr')
          body.style.width = '100%'
          body.style.height = '28px'
          body.style.display = 'flex'
          body.style.alignItems = 'center'
          const tdN = document.createElement('td')
          tdN.className = `N-${member}`
          tdN.innerText = i+1
          tdN.style.textAlign = 'center'
          tdN.style.minWidth = '200px'
          const a = document.createElement('td')
          a.style.minWidth = '150px'
          a.target="_blank"
          const tdJ = document.createElement('td')
          tdJ.className = `job-${member}`
          tdJ.style.minWidth = '200px'
          const tdS1 = document.createElement('td')
          tdS1.className = `power1-${member}`
          tdS1.style.minWidth = '200px'
          const tdS2 = document.createElement('td')
          tdS2.className = `power2-${member}`
          tdS2.style.minWidth = '200px'
          const tdS3 = document.createElement('td')
          tdS3.className = `power3-${member}`
          tdS3.style.minWidth = '200px'
          const tdL = document.createElement('td')
          tdL.className = `level-${member}`
          tdL.style.minWidth = '200px'
          const input1 = document.createElement('input')
          input1.style.minWidth = '180px'
          input1.style.margin = '0 5px'
          const input2 = document.createElement('textarea')
          input2.style.minWidth = '180px'
          input2.style.margin = '0 5px'
          input2.style.height = '20px'
          input2.onfocus = () => {
            window.open(`https://maplescouter.com/info?name=${member}&preset=00000`)}
          input2.onkeydown = e => {
            console.log(e)
            if(e.code === 'Enter'){
              document.getElementsByTagName('textarea')[i+1].focus()
            }
          }
          input2.addEventListener('change',e => {
            const value = e.target.value?.split('\n');
            if(value === "") return false;
            console.log(value)
            const memberLevel = value?.[value.indexOf('|')+1].slice(3)
            const memberJob = value?.[value.indexOf('|')-1]
            const memberPower1 = value?.[value.indexOf('전투력')+3].replace(/ |만|억/g, "")
            const memberPower2 = value?.[value.indexOf('헥사환산')+1].replace(/ |만|억/g, "")
            const memberPower3 = value?.[value.indexOf('보스 380')+6]
            const leveltag = document.getElementsByClassName(`level-${member}`)[0]
            const jobtag = document.getElementsByClassName(`job-${member}`)[0]
            const power1tag = document.getElementsByClassName(`power1-${member}`)[0]
            const power2tag = document.getElementsByClassName(`power2-${member}`)[0]
            const power3tag = document.getElementsByClassName(`power3-${member}`)[0]
            leveltag.innerText = memberLevel || ""
            jobtag.innerText = memberJob || ""
            power1tag.innerText = memberPower1 || ""
            power2tag.innerText = memberPower2  || ""
            power3tag.innerText = memberPower3 || ""
            localStorage.setItem(member, [memberLevel, memberJob, memberPower1, memberPower2, memberPower3])
          })
          if(localStorage.getItem(member)){
            const memberInfoBefore = localStorage.getItem(member).split(',')
            tdL.innerText = memberInfoBefore[0]
            tdJ.innerText = memberInfoBefore[1]
            tdS1.innerText = memberInfoBefore[2]
            tdS2.innerText = memberInfoBefore[3]
            tdS3.innerText = memberInfoBefore[4]
            if(memberInfoBefore[2] === '콜)' || memberInfoBefore[2] === '독)'){
            tdJ.innerText = memberInfoBefore[1]+','+memberInfoBefore[2]
            tdS1.innerText = memberInfoBefore[3]
            tdS2.innerText = memberInfoBefore[4]
            tdS3.innerText = memberInfoBefore[5]
            }
          }
            
          a.innerText = member;
          body.appendChild(tdN)
          body.appendChild(a)
          body.appendChild(tdL)
          body.appendChild(tdJ)
          body.appendChild(tdS1)
          body.appendChild(tdS2)
          body.appendChild(tdS3)
          body.appendChild(input2)
          table.appendChild(body);
        });
        document.body.appendChild(table)
    });
};

func()