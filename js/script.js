const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".indicator span");

if (slides && images.length && prev && next) {

    let current = 0;

    function updateSlider() {
        slides.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === current);
        });
    }

    next.addEventListener("click", () => {
        current = (current + 1) % images.length;
        updateSlider();
    });

    prev.addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        updateSlider();
    });

    setInterval(() => {
        current = (current + 1) % images.length;
        updateSlider();
    }, 5000);

    updateSlider();

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            current = index;
            updateSlider();
        });
    });

    const navLinks = document.querySelectorAll(".page-nav a");
    const sections = [...navLinks].map(link => document.querySelector(link.getAttribute("href")));

    function updatePageNav() {
        let currentIndex = 0;
        sections.forEach((section, index) => {
            if (section && window.scrollY >= section.offsetTop - window.innerHeight * 0.35) {
                currentIndex = index;
            }
        });
        navLinks.forEach((link, index) => {
            link.classList.toggle("active", index === currentIndex);
        });
    }

    const contactForm = document.querySelector("#contact-form");
    const formStatus = document.querySelector("#form-status");

    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", async e => {
            e.preventDefault();
            const submitButton = contactForm.querySelector("button[type='submit']");
            const formData = new FormData(contactForm);
            submitButton.disabled = true;
            formStatus.textContent = "Sending...";
            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                });
                if (response.ok) {
                    contactForm.reset();
                    formStatus.textContent = "送信しました。ありがとうございました。";
                } else {
                    formStatus.textContent = "送信できませんでした。時間をおいて再度お試しください。";
                }
            } catch (error) {
                formStatus.textContent = "送信できませんでした。通信環境をご確認ください。";
            }
            submitButton.disabled = false;
        });
    }

    const sectionTitles = document.querySelectorAll(".section-title");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: .4
    });

    sectionTitles.forEach(title => {
        observer.observe(title);
    });

    const researchModal = document.querySelector("#research-modal");
    const researchModalImage = document.querySelector(".research-modal-image");
    const researchModalCategory = document.querySelector(".research-modal-category");
    const researchModalTitle = document.querySelector(".research-modal-title");
    const researchModalTags = document.querySelector(".research-modal-tags");
    const researchModalInfo = document.querySelector(".research-modal-info");
    const researchModalText = document.querySelector(".research-modal-text");
    const researchModalLinks = document.querySelector(".research-modal-links");
    const researchModalClose = document.querySelector(".research-modal-close");
    const researchModalBg = document.querySelector(".research-modal-bg");
    const researchItemPrev = document.querySelector(".research-item-prev");
    const researchItemNext = document.querySelector(".research-item-next");
    const researchModalBody = document.querySelector(".research-modal-body");


    const researchModalData = {
        "journal-00": {
            category: "Journal Article",
            group: "research",
            title: "起立性調節障害患者を対象にした運動への意識向上のためのシリアスゲーム開発",
            tags: ["研究論文", "査読有り", "筆頭著者", "受賞"],
            image: "",
            info: {
                著者: "宮崎 仁美, 阪口 紗季, 栗原 渉, 韓 旭, 串山 久美子",
                書誌情報: "情報処理学会論文誌 / Vol.66, No.12, p.1794-1807",
                発行日: "2025/12/15"
            },
            text: "本研究では、起立性調節障害(OD)の運動療法において、患者の運動に対するモチベーションを高めることを目指し、OD患者の中高生を対象に、楽しく運動ができるようにするためのシリアスゲームを提案する。本ゲームが実際のOD患者の運動に対する意識に効果があるのかを検証すべく、OD患者の高校生14名を対象に、本ゲームを用いた場合と用いない場合の短時間の運動を実施してもらい、運動前後の感情の変化、主観的運動強度と実際の運動強度、運動の楽しさを比較した。 ",
            links: [["DOI", "https://doi.org/10.20729/0002006335"]]
        },
        "intl-00": {
            category: "International Conference",
            group: "research",
            title: "Towards Wearable-Free Exergame for Orthostatic Dysregulation: Improving Motion Detection with Smartphone - Only Calibration ",
            tags: ["ポスター", "査読有り", "筆頭著者"],
            image: "img/resentativeImgPos25-18.png",
            info: {
                著者: "Hitomi Miyazaki, Saki Sakaguchi, Tetsuaki Baba, Kumiko Kushiyama",
                会議名: "SIGGRAPH Asia 2025",
                開催地: "Hong Kong",
                開催日: "2025/12/15-18"
            },
            text: "This study develops a smartphone-only exergame for adolescents with orthostatic dysregulation to reduce sensor burden while maintaining detection accuracy. Futhermore, this study compared the exergame with a conventional method using an external sensor. The results showed that if calibration is tailored to each participant properly, motion detection can be achieved with the same accuracy as that achieved using a sensor.",
            links: [["DOI", "https://doi.org/10.1145/3757374.3771438"], ["SIGGRAPH ASIA2025 公式サイト", "https://asia.siggraph.org/2025/"]]
        },
        "intl-01": {
            category: "International Conference",
            group: "research",
            title: "Impact of Level-up Element in Development of Exergame for Preventing Prolonged Orthostatic Dysregulation",
            tags: ["ポスター", "査読有り", "筆頭著者"],
            image: "",
            info: {
                著者: "Hitomi Miyazaki, Wataru Kurihara, Xu Han, Saki Sakaguchi, Mina Shibasaki, Kumiko Kushiyama",
                会議名: "The 26th International ACM SIGACCESS Conference on Computers and Accessibility(ASSETS)",
                開催地: "St. John's, Canada",
                開催日: "2024/10/28-30"
            },
            text: "We developed an exergame to reduce exercise resistance and maintain motivation in adolescents with orthostatic dysregulation (OD). The 2D side-scrolling action game was played on a smartphone and synchronized with leg exercises in lying and sitting positions, which are considered effective in the treatment of OD. Furthermore, we conducted a three-week experiment with nine healthy participants to verify the relationship between the level-up element of the player character in the game and the players’ playing styles, including playing time and frequency.",
            links: [["DOI", "https://doi.org/10.1145/3663548.3688484"], ["ASSETS2024 公式サイト", "https://assets24.sigaccess.org/"]]
        },
        "intl-02": {
            category: "International Conference",
            group: "research",
            title: "Development of Exergame to Resolve Deconditioning in Children with Orthostatic Dysregulation",
            tags: ["ポスター", "査読有り", "筆頭著者"],
            image: "img/sig.jpg",
            info: {
                著者: "Hitomi Miyazaki, Wataru Kurihara, Xu Han, Saki Sakaguchi, Kumiko Kushiyama",
                会議名: "SIGGRAPH 2022",
                開催地: "Vancouver, Canada",
                開催日: "2022/8/8-11"
            },
            text: "In this study, we proposed an exergame to reduce resistance to exercise and maintain motivation in adolescents with orthostatic dysregulation. We created a 2D side-scrolling action game in Unity to be played on smartphones. The game is synchronized with exercises that can be done in a lying posture. We analyzed the effect of the game on the feelings of the participants. Our experiments showed that the use of the exergame has a positive effect on the participants’ emotions during exercise.",
            links: [["DOI", "https://doi.org/10.1145/3532719.3543212"], ["SIGGRAPH2022 公式サイト", "https://s2022.siggraph.org/"]]
        },
        "domestic-00": {
            category: "Domestic Conference",
            group: "research",
            title: "起立性調節障害患者の運動を促すシリアスゲーム開発における多周波数超音波センシングを用いたスマートフォン単体での下肢運動検出の検討",
            tags: ["口頭発表", "筆頭著者", "受賞"],
            image: "",
            info: {
                著者: "宮崎 仁美, 阪口 紗季, 馬場 哲晃, 串山 久美子",
                研究会名: "第41回DCC研究会 (CGVI/CVIM/DCC/PRMU共催)",
                開催地: "松江テルサ, 島根県",
                開催日: "2025/11/6-7"
            },
            text: "本研究では、起立性調節障害を持つ中高生の運動に対する抵抗感を軽減し、モチベーションを維持するためのシリアスゲームを制作してきた。本ゲームは、スマートフォンでプレイするアクションゲームで、起立性調節障害の治療に効果があるとされる横になった姿勢もしくは椅子に座った姿勢で行う下肢の運動と連動している。\nまた、本ゲームは患者が自宅でプレイすることを想定しているが、患者がより簡単にゲームを開始できるような仕組みが求められる。著者らの既往研究では、下肢に加速度センサを装着し、Bluetoothでスマートフォンと接続することで運動を検出していたが、センサの装着や接続といった手間が患者に負担となっていた。そこで本稿では、スマートフォンスピーカから多周波数超音波を発し、マイクでその反射音を取得・解析することにより、追加のセンサを用いないスマートフォン単体での下肢運動検出について検討を行う。",
            links: [["Proceedings", "https://ipsj.ixsq.nii.ac.jp/records/2005010"]["第200回CGVI研究会(CGVI/CVIM/DCC/PRMU共催)　公式サイト", "https://cgvi.jp/info/200-2/"]]
        },
        "domestic-02": {
            category: "Domestic Conference",
            group: "research",
            title: "凹凸触覚ブロックを用いた２人協力型情報伝達ゲームの提案",
            tags: ["デモ発表", "査読有り"],
            image: "img/1A-14.png",
            info: {
                著者: "佐藤 陽菜, 水田 愛梨, 黒田 清音,宮崎 仁美, 韓 旭, 串山 久美子",
                研究会名: "インタラクション2025",
                開催地: "学術総合センター内 一橋講堂, 東京都",
                開催日: "2025/3/2-4",
            },
            text: "物の形状を相手に説明するといった形式の協力型ゲームは様々なジャンルにおいて開発されている。しかし、視覚障害を持っていると視覚を用いて物の形状を認識することが困難であることが多く、こうした協力型ゲームを楽しむことは難しい。そこで本研究では、視覚障害者と健常者が共に楽しむことのできる触覚を用いた協力型ゲームを提案する。ゲームには触覚提示用ブロックを使用し、目隠しをした状態で２人で協力して同じ形を持つブロックを探すことを目指す",
            links: [["Proceedings", "https://www.interaction-ipsj.org/proceedings/2025/data/bib/1A-14.html"]]
        },
        "domestic-03": {
            category: "Domestic Conference",
            group: "research",
            title: "SNS利用者間の対面コミュニケーションを促進するカード型ウェアラブル端末の提案",
            tags: ["デモ発表", "査読有り"],
            image: "img/1B-31.png",
            info: {
                著者: "白石 快，藤田 真衣，朴 エリヤ，宮崎 仁美，韓 旭，串山 久美子",
                研究会名: "インタラクション2025",
                開催地: "学術総合センター内 一橋講堂, 東京都",
                開催日: "2025/3/2-4",
            },
            text: "初対面のコミュニケーションには自己開示をすることが重要である。また共通点があればより親密性を感じられる一方、近年は万人に通じる話題が減少している。そこで本稿では、SNSの他者との共通点の発見しやすさに着目し、web APIを活用して相手との共通点を示すことで、対面でのコミュニケーションを円滑にするカード型ウェアラブルデバイスを提案する。",
            links: [["Proceedings", "https://www.interaction-ipsj.org/proceedings/2025/data/bib/1B-31.html"]]
        },
        "domestic-04": {
            category: "Domestic Conference",
            group: "research",
            title: "指紋の多様性を可聴化した演奏システムの制作",
            tags: ["デモ発表", "査読有り"],
            image: "img/1B-56.jpg",
            info: {
                著者: "髙見 明花, 辻村 アレクシ 健, 大野 充樹, 宮崎 仁美，韓 旭，串山 久美子",
                研究会名: "インタラクション2025",
                開催地: "学術総合センター内 一橋講堂, 東京都",
                開催日: "2025/3/2-4",
            },
            text: "生体認証に利用される生体情報は、各個人に固有のものであるという広い多様性を持っているにも関わらず、主にセキュリティシステムへの利用にとどまっている。そこで、本研究では、生体情報の持つ多様性を芸術分野に活用することを目指し、生体情報の中でも指紋に着目した。個人の持つ指紋の独自性・多様性を音に変換して、その音で演奏を行うことができるシステムを提案する。",
            links: [["Proceedings", "https://www.interaction-ipsj.org/proceedings/2025/data/bib/1B-56.html"]]
        },
        "domestic-05": {
            category: "Domestic Conference",
            group: "research",
            title: "クロスモーダル効果を用いた日本酒の飲酒体験に変化を与えるコースター型デバイスの提案",
            tags: ["デモ発表", "査読有り"],
            image: "img/1C-64.jpg",
            info: {
                著者: "中原 麻結，高橋 陽祐，峪 紳大朗，宮崎 仁美，韓 旭，串山 久美子",
                研究会名: "インタラクション2025",
                開催地: "学術総合センター内 一橋講堂, 東京都",
                開催日: "2025/3/2-4",
            },
            text: "近年、若者の日本酒離れが顕著になっている。その問題を解決するために日本酒という日本の食文化の一つの伝承のためには、若者が持つ日本酒に対するイメージの払拭が必要であると考えた。本研究では、クロスモーダル知覚に着目し、日本酒の飲酒時に適切な視覚刺激、聴覚刺激を与えることで味覚の感受性に変化を与えるコースター型デバイスの構築およびその有効性評価について報告する。",
            links: [["Proceedings", "https://www.interaction-ipsj.org/proceedings/2025/data/bib/1C-64.html"]]
        },
        "domestic-06": {
            category: "Domestic Conference",
            group: "research",
            title: "メカニカルな要素を柔らかな素材に置き換えたぬいぐるみ型電子工作玩具の提案",
            tags: ["デモ発表", "査読有り"],
            image: "img/2B-29.png",
            info: {
                著者: "古田ゆい, 阪口紗季, 柴﨑美奈, 韓旭, 宮崎仁美, 串山久美子",
                研究会名: "インタラクション2025",
                開催地: "学術総合センター内 一橋講堂, 東京都",
                開催日: "2025/3/2-4",
            },
            text: "児童のプログラミング教育の導入として、市場には多くの電子工作玩具が存在するが、メカニカルなものに興味を示しにくい児童にはハードルが高い課題がある。そこで本研究では、小学校低学年に向けて柔らかいぬいぐるみ型電子工作玩具を提案する。児童がオリジナルのぬいぐるみを作る体験を通じて、電子工作やプログラミングといった技術的学習への興味関心が高まることを目指す。",
            links: [["Proceedings", "https://www.interaction-ipsj.org/proceedings/2025/data/bib/2B-29.html"]]
        },
        "domestic-07": {
            category: "Domestic Conference",
            group: "research",
            title: "起立性調節障害の長期化防止に向けたシリアスゲーム制作におけるプレイヤーのレベルアップ要素が与える影響の検証",
            tags: ["口頭発表", "筆頭著者", "受賞"],
            image: "img/mainIMG.png",
            info: {
                著者: "宮崎 仁美, 栗原 渉, 韓 旭, 阪口 紗季, 串山 久美子",
                研究会名: "EC2023",
                開催地: "東京工科大学 八王子キャンパス, 東京都",
                開催日: "2023/8/30-9/2",
            },
            text: "本研究では、起立性調節障害を持つ中高生の運動に対する抵抗感を軽減し、モチベーションを維持するためのシリアスゲームを制作してきた。本ゲームは、スマートフォンでプレイする2D 横スクロールアクションゲームで、起立性調節障害の治療に効果があるとされる、横になった姿勢もしくは半身起こした姿勢、椅子に座った姿勢で行う下肢の運動と連動している。起立性調節障害の治療においては、毎日の継続的な運動が求められる。本稿では、ゲーム内に搭載したプレイヤーキャラクターのレベルアップ要素がゲームの使用者のプレイ時間、時間帯、頻度といったプレイスタイルに与える影響を調査する。",
            links: [["Proceedings", "https://cir.nii.ac.jp/crid/1050578747056485888"]]
        },
        "domestic-08": {
            category: "Domestic Conference",
            group: "research",
            title: "起立性調節障害の長期化防止に向けたシリアスゲームの提案",
            tags: ["口頭発表", "筆頭著者"],
            image: "img/ec2021.png",
            info: {
                著者: "宮崎 仁美, 栗原 渉, 韓 旭, 串山 久美子",
                研究会名: "EC2021",
                開催地: "オンライン開催",
                開催日: "2021/8/30-9/1",
            },
            text: "起立時にめまいや動悸などが起きる自律神経の病気である起立性調節障害により、不登校などの深刻な状況を抱える思春期の子どもが増加している。治療方法の一つとして運動療法は有効であると言われているが、モチベーションを維持に課題がある。そこで本研究では運動に対する抵抗感を減らし、モチベーションを維持させるためのシリアスゲームを提案および制作する。ゲーム内では、寝たまま屈伸やペダルを漕ぐ動作などの動作を足に装着したセンサによって検知する。",
            links: [["Proceedings", "https://cir.nii.ac.jp/crid/1050292572144943744"]]
        },
        "domestic-09": {
            category: "Domestic Conference",
            group: "research",
            title: "音を蓄積するゴミ箱カバー型デバイスを利用したゴミを捨てたくなる仕掛けの提案",
            tags: ["デモ発表", "査読有り", "筆頭著者"],
            image: "img/gomicover.png",
            info: {
                著者: "宮崎 仁美，小松 伸之輔，栗原 渉，有山 大地，串山 久美子",
                研究会名: "インタラクション2021",
                開催地: "オンライン開催",
                開催日: "2021/3/10-12",
            },
            text: "持続可能な社会の実現に向け、ゴミ問題はより一層社会の関心を集めている。特にポイ捨てに関しては、個人の行動変容によって一定の問題解決の力になると考えられる。本研究では、ゴミを捨てたくなる仕掛けとして、音を蓄積するゴミ箱カバー型デバイスを提案する。",
            links: [["Proceedings", "https://www.interaction-ipsj.org/proceedings/2021/data/bib/3A17.html"]]
        },
    };

    let currentResearchId = null;

    function getResearchGroupIds(group) {
        return Object.keys(researchModalData).filter(id => researchModalData[id].group === group);
    }

    function openResearchModal(id) {
        const data = researchModalData[id];
        if (!data || !researchModal) return;
        currentResearchId = id;
        researchModalCategory.textContent = data.category;
        researchModalTitle.textContent = data.title;
        researchModalTags.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join("");
        researchModalInfo.innerHTML = Object.entries(data.info).map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join("");
        researchModalText.textContent = data.text;
        researchModalLinks.innerHTML = (data.links || []).map(link => `<a href="${link[1]}" target="_blank" rel="noopener">${link[0]}${externalIconHtml()}</a>`).join("");
        if (data.image) {
            researchModalImage.innerHTML = `<img src="${data.image}" alt="">`;
            researchModalImage.classList.add("active");
        } else {
            researchModalImage.innerHTML = "";
            researchModalImage.classList.remove("active");
        }
        if (data.image) {
            researchModalBody.classList.remove("no-image");
        } else {
            researchModalBody.classList.add("no-image");
        }
        researchModal.classList.add("active");
        document.body.classList.add("modal-open");
    }

    function closeResearchModal() {
        researchModal.classList.remove("active");
        document.body.classList.remove("modal-open");
    }

    function moveResearchModal(direction) {
        const data = researchModalData[currentResearchId];
        if (!data) return;
        const ids = getResearchGroupIds(data.group);
        const index = ids.indexOf(currentResearchId);
        openResearchModal(ids[(index + direction + ids.length) % ids.length]);
        researchModal.classList.add("active");
        document.body.classList.add("modal-open");

        const content = document.querySelector(".research-modal-content");
        if (content) {
            content.scrollTop = 0;
        }
    }

    document.querySelectorAll("[data-research-modal]").forEach(item => {
        item.addEventListener("click", () => openResearchModal(item.dataset.researchModal));
    });

    if (researchItemPrev) researchItemPrev.addEventListener("click", () => moveResearchModal(-1));
    if (researchItemNext) researchItemNext.addEventListener("click", () => moveResearchModal(1));
    if (researchModalClose) researchModalClose.addEventListener("click", closeResearchModal);
    if (researchModalBg) researchModalBg.addEventListener("click", closeResearchModal);

    const workModal = document.querySelector("#work-modal");
    const workModalSlides = document.querySelector(".work-modal-slides");
    const workModalDots = document.querySelector(".work-modal-dots");
    const workModalTitle = document.querySelector(".work-modal-title");
    const workModalTags = document.querySelector(".work-modal-tags");
    const workModalInfo = document.querySelector(".work-modal-info");
    const workModalText = document.querySelector(".work-modal-text");
    const workModalLinks = document.querySelector(".work-modal-links");
    const workModalClose = document.querySelector(".work-modal-close");
    const workModalBg = document.querySelector(".work-modal-bg");
    const workItemPrev = document.querySelector(".work-item-prev");
    const workItemNext = document.querySelector(".work-item-next");
    const workGalleryPrev = document.querySelector(".work-gallery-prev");
    const workGalleryNext = document.querySelector(".work-gallery-next");

    const workModalData = {
        "project-00": {
            group: "projects",
            title: "アドベントカレンダーあけほうだい",
            tags: ["インタラクティブコンテンツ", "グループ制作"],
            images: ["img/icsaf.JPG", "img/icsaf02.JPG"],
            info: { year: "2022", role: "企画 (共同), ソフトウェア実装", tools: "Unity, SuperCollider" },
            text: "ICSAF2022 (インターカレッジ・ソニックアーツ・フェスティバル 2022) にて展示したインタラクティブアート作品。アドベントカレンダー型のデバイスの扉を開けると、扉に書かれたイラストにちなんだ音が再生される。扉を閉めると音は停止する。複数の音を同時に再生し、楽器のように楽しむことができる。",
            links: [["イベントページ", "https://ic.jssa.info/index_2022.html"]]
        },
        "project-01": {
            group: "projects",
            title: "影絵バトル",
            tags: ["インタラクティブコンテンツ", "グループ制作"],
            images: ["img/kagee.JPG", "img/kagee2.JPG"],
            info: { year: "2021", role: "企画 (共同), 実装", tools: "P5.js, illustrator" },
            text: "東京都人権プラザで実施された発明プロジェクト２にて開発したインタラクティブコンテンツ。スクリーンの前に立った体験者２名の影の動を用い、画面内の敵の撃破を目指すといった内容。障がいによって、できる動きが限られている人や、他者とのコミュニケーションが難しく協調することが苦手な人は多い一方で、そうした子どもがそうではない子どもと楽しく遊ぶことができるコンテンツはあまり多くないという課題に着目し、体験者の影を用いることで、体験者のできる動きや体格に依存しないことを目指している。\nまた、意識的に他人と協調することが難しい場合もあるため、一人の作業がいつの間にか共同作業になっているような体験を目指している。どのような影で敵を撃破できるかを明示せず、入力も曖昧にすることで「協力しようと思っても意外と上手く行かない」感覚や、逆に「勝手に動いていたら上手く行ってしまった」という感覚を生み出している。この曖昧さは、TeachableMachineを使用し、スクリーンに映った「影のみ」を学習させていることに起因している。「影が特定の形状に近づくこと」がゲームクリアに繋がるため、体験者の動きや立ち位置の変化によって、ゲームの結果が大きく異なる。そのため「たまたま上手く行った」「失敗した」体験を創出することが可能になっている。",
            links: [["イベントページ", "https://www.tokyo-hrp.jp/plaza-inclusive-02.html"]]
        },
        "project-02": {
            group: "projects",
            title: "技術同人誌の発行",
            tags: ["技術同人誌", "グループ制作"],
            images: ["img/teckzines.png", "img/techzinep5.jpg", "img/techzined3.jpg"],
            info: { year: "2020, 2021", role: "企画 (共同), 執筆 (一部), カバーデザイン (超ビジュアル訳～のみ)", tools: "p5.js, D3.js, illustrator" },
            text: "すぎもと組にて学内有志学生と教員で制作した技術同人誌。\n技術書典9にて「超ビジュアル訳超ビジュアル訳　ニーチェの詩：p5.jsでうたう『深夜の鐘の歌』」を、技術書典11にて「データビジュアリスト宣言：Observable/D3.jsではじめるデータ記事発信」を販売。\n\n「超ビジュアル訳　ニーチェの詩」はニーチェの主著『ツァラトゥストラかく語りき』に登場する一編の詩「深夜の鐘の歌」を一行ごとに解釈したp5.jsによるタイポグラフィ作品集。また、p5.jsのコード解説も記載。技術書典 「刺され！技術書アワード」エポックメイキング部門賞最終候補作品に選出。\n\n「データビジュアリスト宣言」はJavaScriptやMarkdownが書ける共有ノートブックサービスObservableとデータ可視化によく使われるライブラリD3.jsの入門書。",
            links: [["書籍サイト (超ビジュアル訳～)", "https://visualized-nietzsche.tumblr.com/"], ["書籍サイト (データビジュアリスト宣言)", "https://data-visualist-manifesto.tumblr.com/"]]
        },
        "project-03": {
            group: "projects",
            title: "感覚鈍麻障害者のための匂いチェッカーの提案",
            tags: ["デバイス", "グループ制作"],
            images: ["img/NIF2020_F-1.jpg"],
            info: { year: "2020", role: "企画 (共同), コンセプトデザイン", tools: "Fusion360" },
            text: "匂いの感覚鈍麻は、障害に気づかれにくい特徴であるため、周囲に理解が得られにくい課題がある。また、既存の匂いチェッカーは、機能性に特化しているため、児童を対象とした愛着を持ちやすいデザインにはなっていない。そのため、本提案では児童が愛着をもちやすい可愛らしい匂いチェッカーを制作した。キャラクターの表情のみでフィードバックを表示するため、自身の匂いの有無を直感的に確認することができる。\nニーズ&アイデアフォーラム2020にて開発。福祉系・工学系・デザイン系の異分野の学生6名によるグループ制作。",
            links: []
        },
        "project-04": {
            group: "projects",
            title: "みやこ祭2019 Projection Mapping",
            tags: ["映像作品", "グループ制作"],
            images: ["img/pm00.jpg", "img/pm02.jpg", "img/pm01.jpg", "img/pm03.jpg"],
            info: { year: "2019", role: "代表", tools: "Premiere Pro, After Effects" },
            text: "大学祭にて学科内有志グループでプロジェクションマッピングを実施。東京都立大学1号館の壁面に5分程度の映像の投影を行った。また、代表として意見の取りまとめやスケジュール管理を担当。また、映像制作や投影作業も中心的に行った。",
            links: []
        },
        "project-05": {
            group: "projects",
            title: "いきものみっけ！",
            tags: ["ワークショップ", "グループ制作"],
            images: ["img/mike.JPG"],
            info: { year: "2019", role: "企画・運営, 制作 (共同)", tools: "illustrator" },
            text: "生物系・デザイン系の学生を中心に小学校で実施したワークショップイベント。\n教室内に隠された生物の写真探しや自然素材を用いた工作を通じて、身近な生物の生態や面白さを学ぶことができるイベント。",
            links: []
        },
        "project-06": {
            group: "projects",
            title: "大学ボランティアセンターでの活動",
            tags: ["グラフィックデザイン", "グループ制作"],
            images: ["img/kanban01.jpg", "img/pos00.png", "img/pos02.png", "img/sama.jpg"],
            info: { year: "2018-2023", role: "学生コーディネーター (ボランティア)", tools: "illustrator" },
            text: "2018年から2023年まで、東京都立大学ボランティアセンター (旧：首都大学東京ボランティアセンター) にて学生コーディネーター（ボランティアスタップ）として、様々な印刷物を制作。また、首都大学東京から東京都立大学に変わる際は看板のデザインも担当。\n印刷物作成の際は、企画の趣旨やターゲット層を他の学生と議論し、デザインの選定を行った。また、ボランティアセンター主催の企画運営自体にも度々関与した。",
            links: [["都立大ボランティアセンター", "https://volunteer.tmu.ac.jp/"]]
        },
        "project-07": {
            group: "projects",
            title: "Creative Coding Works",
            tags: ["メディアアート", "個人制作"],
            images: ["img/lifegame.png", "img/21.png", "img/69.png", "img/196.png"],
            info: { year: "2018-", tools: "p5.js, processing" },
            text: "趣味の一環で制作。制作物の一部はOpenProcessingにて公開。",
            links: [["OpenProcessing", "https://openprocessing.org/@u226706#sketches"]]
        },
    };

    let currentModalId = null;
    let currentModalImage = 0;

    function externalIconHtml() {
        const template = document.querySelector("#external-icon-template");
        return template ? template.innerHTML : "";
    }

    function getGroupIds(group) {
        return Object.keys(workModalData).filter(id => workModalData[id].group === group);
    }

    function updateWorkModalSlider() {
        if (!workModalSlides || !workModalDots) return;
        workModalSlides.style.transform = `translateX(-${currentModalImage * 100}%)`;
        [...workModalDots.children].forEach((dot, index) => {
            dot.classList.toggle("active", index === currentModalImage);
        });
    }

    function renderWorkModalImages(images) {
        currentModalImage = 0;
        workModalSlides.innerHTML = images.map(src => `<img src="${src}" alt="">`).join("");
        workModalDots.innerHTML = images.map((_, index) => `<span class="${index === 0 ? "active" : ""}"></span>`).join("");
        const isSingle = images.length <= 1;
        workGalleryPrev.classList.toggle("hidden", isSingle);
        workGalleryNext.classList.toggle("hidden", isSingle);
        workModalDots.classList.toggle("hidden", isSingle);
        [...workModalDots.children].forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentModalImage = index;
                updateWorkModalSlider();
            });
        });
        updateWorkModalSlider();
    }

    function openWorkModal(id) {
        const data = workModalData[id];
        if (!data || !workModal) return;
        currentModalId = id;
        renderWorkModalImages(data.images);
        workModalTitle.textContent = data.title;
        workModalTags.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join("");
        workModalInfo.innerHTML = Object.entries(data.info).map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join("");
        workModalText.textContent = data.text;
        workModalLinks.innerHTML = (data.links || []).map(link => `<a href="${link[1]}" target="_blank" rel="noopener">${link[0]}${externalIconHtml()}</a>`).join("");
        workModal.classList.add("active");
        document.body.classList.add("modal-open");
    }

    function closeWorkModal() {
        workModal.classList.remove("active");
        document.body.classList.remove("modal-open");
    }

    function moveWorkModal(direction) {
        const data = workModalData[currentModalId];
        if (!data) return;
        const ids = getGroupIds(data.group);
        const index = ids.indexOf(currentModalId);
        openWorkModal(ids[(index + direction + ids.length) % ids.length]);
    }

    function moveWorkModalImage(direction) {
        const data = workModalData[currentModalId];
        if (!data || data.images.length <= 1) return;
        currentModalImage = (currentModalImage + direction + data.images.length) % data.images.length;
        updateWorkModalSlider();
    }

    document.querySelectorAll("[data-modal]").forEach(item => {
        item.addEventListener("click", () => openWorkModal(item.dataset.modal));
    });

    if (workItemPrev) workItemPrev.addEventListener("click", () => moveWorkModal(-1));
    if (workItemNext) workItemNext.addEventListener("click", () => moveWorkModal(1));
    if (workGalleryPrev) workGalleryPrev.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        moveWorkModalImage(-1);
    });
    if (workGalleryNext) workGalleryNext.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        moveWorkModalImage(1);
    });
    if (workModalClose) workModalClose.addEventListener("click", closeWorkModal);
    if (workModalBg) workModalBg.addEventListener("click", closeWorkModal);

    window.addEventListener("scroll", updatePageNav);
    window.addEventListener("load", updatePageNav);

    window.addEventListener("load", () => {
        const loader = document.querySelector("#page-loader");
        if (!loader) return;

        requestAnimationFrame(() => {
            loader.classList.add("hide");
        });

        setTimeout(() => {
            loader.remove();
        }, 900);
    });

    function moveWorkGalleryForMobile() {
        const panel = document.querySelector(".work-modal-panel");
        const gallery = document.querySelector(".work-modal-gallery");
        const content = document.querySelector(".work-modal-content");
        const info = document.querySelector(".work-modal-info");

        if (!panel || !gallery || !content || !info) return;

        if (window.innerWidth <= 900) {
            if (gallery.parentElement !== content) {
                info.insertAdjacentElement("afterend", gallery);
            }
        } else {
            if (gallery.parentElement === content) {
                panel.insertBefore(gallery, content);
            }
        }
    }

    window.addEventListener("load", moveWorkGalleryForMobile);
    window.addEventListener("resize", moveWorkGalleryForMobile);
}
