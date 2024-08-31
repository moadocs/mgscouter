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
        const ul = document.createElement('ul');
        const title = document.createElement('li')
        title.style.display = 'flex'
        title.style.height = '28px'
        const span1 = document.createElement('span')
        const span2 = document.createElement('span')
        const span3 = document.createElement('span')
        const span4 = document.createElement('span')
        const span5 = document.createElement('span')
        const span6 = document.createElement('span')
        const span7 = document.createElement('span')
        span1.style.minWidth = '150px'
        span2.style.minWidth = '200px'
        span3.style.minWidth = '200px'
        span4.style.minWidth = '200px'
        span5.style.minWidth = '200px'
        span6.style.minWidth = '200px'
        span7.style.minWidth = '200px'
        span1.innerText = '닉네임';
        span2.innerText = '수로';
        span3.innerText = '환산복붙';
        span4.innerText = '직업';
        span5.innerText = '전투력';
        span6.innerText = '헥사환산 (전투력)';
        span7.innerText = '헥사환산 (보스300)';
        title.appendChild(span1)
        title.appendChild(span2)
        title.appendChild(span3)
        title.appendChild(span4)
        title.appendChild(span5)
        title.appendChild(span6)
        title.appendChild(span7)

        ul.appendChild(title)
        members.forEach(member => {
          const li = document.createElement('li')
          li.style.width = '100%'
          li.style.height = '28px'
          li.style.display = 'flex'
          li.style.alignItems = 'center'
          const a = document.createElement('a')
          a.style.minWidth = '150px'
          a.href = `https://maplescouter.com/info?name=${member}&preset=00000`
          a.target="_blank"
          const spanJ = document.createElement('span')
          spanJ.className = `job-${member}`
          spanJ.style.minWidth = '200px'
          const spanS1 = document.createElement('span')
          spanS1.className = `power1-${member}`
          spanS1.style.minWidth = '200px'
          const spanS2 = document.createElement('span')
          spanS2.className = `power2-${member}`
          spanS2.style.minWidth = '200px'
          const spanS3 = document.createElement('span')
          spanS3.className = `power3-${member}`
          spanS3.style.minWidth = '200px'
          const input1 = document.createElement('input')
          input1.style.minWidth = '180px'
          input1.style.margin = '0 5px'
          const input2 = document.createElement('textarea')
          input2.style.minWidth = '180px'
          input2.style.margin = '0 5px'
          input2.style.height = '20px'
          input2.addEventListener('change',e => {
            const value = e.target.value?.split('\n');
            console.log(value)
            const memberJob = value?.[value.indexOf('|')-1]
            const memberPower1 = value?.[value.indexOf('전투력')+3]
            const memberPower2 = value?.[value.indexOf('헥사환산')+1]
            const memberPower3 = value?.[value.indexOf('보스 380')+6]
            const jobtag = document.getElementsByClassName(`job-${member}`)[0]
            const power1tag = document.getElementsByClassName(`power1-${member}`)[0]
            const power2tag = document.getElementsByClassName(`power2-${member}`)[0]
            const power3tag = document.getElementsByClassName(`power3-${member}`)[0]
            jobtag.innerText = memberJob
            power1tag.innerText = memberPower1
            power2tag.innerText = memberPower2
            power3tag.innerText = memberPower3
          })
          a.innerText = member;
          li.appendChild(a)
          li.appendChild(input1)
          li.appendChild(input2)
          li.appendChild(spanJ)
          li.appendChild(spanS1)
          li.appendChild(spanS2)
          li.appendChild(spanS3)
          ul.appendChild(li);
        });
        document.body.appendChild(ul)
    });
};

func()