import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import './Skills.scss';
gsap.registerPlugin(ScrollTrigger);

const Skills = ({ data }) => {
  const skillsTitleRef = useRef(null);
  const skillsTriggerRef = useRef(null);

  useEffect(() => {
    const skillsTitle = skillsTitleRef.current;
    const skillsTrigger = skillsTriggerRef.current;

    gsap.fromTo(skillsTitle, { y: 0 }, { scrollTrigger: {
      trigger: skillsTrigger,
      start: '1% 35%',
      toggleActions: "play none none reverse"
    },
    y: '-50%',
    ease: 'sine.out',
    duration: 1
    });
  }, []);

  return(
    <section id='skills'>
      <div className='skills__wrapper'>
        <div className='skills__title' ref={skillsTriggerRef}>
          <div ref={skillsTitleRef}>
            <p>を使って仕事をしています</p>
            <p>{data.skills?.title}</p>
          </div>
        </div>
        <div className='skills__container'>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/js.svg'} alt="JavaScript" />
            <p>JavaScript</p>
            <p className='skill__hover'>ジャバスクリプト</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/node-js.svg'} alt="Node" />
            <p>Node</p>
            <p className='skill__hover'>ノード</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/react.svg'} alt="React" />
            <p>React</p>
            <p className='skill__hover'>リアクト</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/redux.svg'} alt="Redux" />
            <p>Redux</p>
            <p className='skill__hover'>リダックス</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/typescript.svg'} alt="TypeScript" />
            <p>TypeScript</p>
            <p className='skill__hover'>タイプスクリプト</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/html5.svg'} alt="HTML5" />
            <p>HTML5</p>
            <p className='skill__hover'>ハイパーテキストマークアップ言語</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/css3-alt.svg'} alt="CSS3" />
            <p>CSS3</p>
            <p className='skill__hover'>カスケード スタイル シート。</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/responsive-design.svg'} alt="RWD" />
            <p>RWD</p>
            <p className='skill__hover'>レスポンシブウェブデザイン</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/mongodb.svg'} alt="MongoDB" />
            <p>MongoDB</p>
            <p className='skill__hover'>モンゴデータベース</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/firebase.svg'} alt="Firebase" />
            <p>Firebase</p>
            <p className='skill__hover'>ファイアベースデータベース</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/expressjs.svg'} alt="Express" />
            <p>Express</p>
            <p className='skill__hover'>エクスプレス</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/git.svg'} alt="Git" />
            <p>Git</p>
            <p className='skill__hover'>分散バージョン管理システム</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/bootstrap.svg'} alt="Bootstrap" />
            <p>Bootstrap</p>
            <p className='skill__hover'>ブートストラップ</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/sass.svg'} alt="SASS" />
            <p>SASS</p>
            <p className='skill__hover'>構文的に素晴らしいスタイル シート</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/greensock.svg'} alt="GSAP" />
            <p>GSAP</p>
            <p className='skill__hover'>グリーン ソックス アニメーション プラットフォーム</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/visual-studio.svg'} alt="Visual Studio" />
            <p>VS</p>
            <p className='skill__hover'>ビジュアル コード スタジオ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
