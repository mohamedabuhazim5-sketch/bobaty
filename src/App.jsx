import { useEffect, useMemo, useState } from "react";
import "./App.css";

const DISPLAY_NAME = "بوبتي";
const SITE_PASSWORD = "2amoory";
const ACQUAINTANCE_DATE = "2020-07-22T00:00:00";

function TypingText({ text, speed = 35, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayed}</p>;
}

export default function App() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [counter, setCounter] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const content = useMemo(
    () => ({
      heroName: DISPLAY_NAME,
      heroSub: "بوبتي... يا أجمل حد دخل حياتي ويا أحنّ إحساس في قلبي 🤍✨",
      heroText:
        "المكان ده معمول مخصوص ليكي يا بوبتي، فيه كلام من قلبي، وذكريات حلوة، وإحساس صادق حبيت أوصّلهولك بطريقة تليق بيكي وبمكانتك الكبيرة عندي.",
      meetTitle: "من أول ما عرفتك يا بوبتي 🤍",
      meetDate: "22 / 7 / 2020",
      timerTitle: "من أول لقاء بيني وبين بوبتي 🤍",
      timerText:
        "من اليوم ده، والدنيا بقى فيها شعور مختلف، لأن بوبتي دخلت حياتي، ومن وقتها وكل حاجة بقى ليها طعم أهدى وأجمل.",
      longMessage:
        "يا بوبتي... مهما كتبت، الكلام مش هيكفي يوصف مكانتك عندي. إنتِ من أجمل الناس اللي دخلوا حياتي، ومن أكتر الأشخاص اللي وجودهم ساب أثر حلو في قلبي وفي أيامي. فيكي راحة، وفيكي جمال، وفيكي إحساس مختلف فعلًا.",
      cuteText:
        "رسالة صغيرة متكتبة بحب كبير... مخصوص لأجمل بوبتي في الدنيا 🤍",
      finalText:
        "وفي الآخر، أحب أقولك يا بوبتي إنك من أجمل النعم اللي مرت عليّ، وإن مكانك عندي كبير جدًا وهيفضل كبير. أتمنى أشوفك دايمًا مبسوطة، مرتاحة، وضحكتك منوّرة الدنيا حواليكي، وأفضل فاكر إن وجودك كان وما زال من أجمل الحاجات اللي حصلت في حياتي 🤍",
    }),
    []
  );

  const memoryCards = useMemo(
    () => [
      {
        id: 1,
        title: "بداية بوبتي",
        image: "/1.jpg",
        date: "22 / 7 / 2020",
        text: "من أول لحظة، حسّيت إن بوبتي مش شبه أي حد، وإن في حضورها حاجة جميلة تخطف القلب بهدوء.",
      },
      {
        id: 2,
        title: "ضحكة بوبتي",
        image: "/2.jpg",
        date: "أجمل تفصيلة",
        text: "ضحكة بوبتي من الحاجات اللي بتصلّح اليوم كله، وبتخلي أي لحظة ألطف وأجمل من غير أي مجهود.",
      },
      {
        id: 3,
        title: "وجود بوبتي",
        image: "/3.jpg",
        date: "راحة قلبي",
        text: "وجود بوبتي في حياتي كان دايمًا مريح، وكأن الدنيا بتهدى لمجرد إنها موجودة.",
      },
      {
        id: 4,
        title: "كلام بوبتي",
        image: "/4.jpg",
        date: "أثر جميل",
        text: "كلام بوبتي ليه إحساس مختلف، بسيط جدًا لكنه بيوصل للقلب بسرعة ويسيب جواه أثر حلو.",
      },
      {
        id: 5,
        title: "عيون بوبتي",
        image: "/5.jpg",
        date: "نظرة لا تُنسى",
        text: "في عيون بوبتي هدوء وجمال يخلّوا القلب يقف لحظة ويتأمل قد إيه هي مميزة فعلًا.",
      },
      {
        id: 6,
        title: "ونس بوبتي",
        image: "/6.jpg",
        date: "أحلى إحساس",
        text: "مع بوبتي، حتى أبسط اللحظات بيبقى ليها معنى مختلف، وونسها دايمًا له طعم خاص.",
      },
      {
        id: 7,
        title: "بوبتي وبس",
        image: "/7.jpg",
        date: "أغلى حد",
        text: "مهما كتبت، هتفضل بوبتي شخص غالي جدًا، وليها مكانة جوه قلبي ما ينفعش تتشبه بأي حد تاني.",
      },
    ],
    []
  );

  const timelineItems = useMemo(
    () => [
      {
        title: "أول لقاء مع بوبتي",
        date: "22 / 7 / 2020",
        text: "هنا بدأت الحكاية، وبدأ إحساس جميل فضّل عايش في القلب.",
      },
      {
        title: "أول راحة مع بوبتي",
        date: "بعدها بفترة",
        text: "مع الوقت، بقيت أحس إن بوبتي شخص مختلف فعلًا، وقريب من القلب بطريقة مميزة جدًا.",
      },
      {
        title: "ذكريات بوبتي",
        date: "في كل وقت",
        text: "كل موقف، وكل كلمة، وكل لحظة مع بوبتي خلّوا الذكريات ليها طعم حلو وما يتنسيش.",
      },
      {
        title: "بوبتي دلوقتي",
        date: "النهارده",
        text: "لحد دلوقتي، بوبتي ليها نفس الجمال ونفس المكانة ونفس الأثر الحلو جوا قلبي.",
      },
    ],
    []
  );

  const cuteFacts = useMemo(
    () => [
      { title: "اسم اللي في قلبي", value: DISPLAY_NAME },
      { title: "أول لقاء مع بوبتي", value: "22/7/2020" },
      { title: "عدد صور بوبتي", value: "7" },
      { title: "مكانة بوبتي", value: "كبيرة جدًا" },
    ],
    []
  );

  const reasons = useMemo(
    () => [
      "ضحكة بوبتي",
      "كلام بوبتي",
      "طيبة بوبتي",
      "حنان بوبتي",
      "وجود بوبتي",
      "أسلوب بوبتي",
      "جمال بوبتي",
      "راحة قلبي مع بوبتي",
    ],
    []
  );

  const loveParagraphs = useMemo(
    () => [
      "يا بوبتي... في ناس وجودهم عادي، وفي ناس وجودهم لوحده يغيّر شكل اليوم كله. وإنتِ من الناس اللي وجودهم له معنى جميل جدًا في القلب.",
      "كل حاجة في بوبتي ليها طابع خاص؛ كلامها، ضحكتها، هدوءها، وأسلوبها... كل ده بيخليها مميزة جدًا من غير ما تحاول.",
      "أنا بحب في بوبتي إنها من الناس اللي يسيبوا أثر حلو من غير مجهود، ويكفي إن مجرد التفكير فيها بيخليني أبتسم من قلبي.",
      "ولو اتكلمت عن مكانة بوبتي، فالحقيقة إنها من الناس القليلة اللي ليهم قيمة كبيرة جدًا، ومشاعرهم تفضل محفوظة في القلب مهما مر وقت.",
    ],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const startDate = new Date(ACQUAINTANCE_DATE);

    const updateCounter = () => {
      const now = new Date().getTime();
      const start = startDate.getTime();
      const difference = now - start;

      if (difference <= 0) {
        setCounter({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCounter({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isUnlocked) return;

    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playAudio();
  }, [isUnlocked]);

  const handleUnlock = async (e) => {
    e.preventDefault();

    if (enteredPassword === SITE_PASSWORD) {
      setIsUnlocked(true);
      setError("");

      setTimeout(async () => {
        const audio = document.getElementById("loveAudio");
        if (!audio) return;
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }, 250);
    } else {
      setError(`الباسورد غلط يا ${DISPLAY_NAME} 🤍`);
    }
  };

  const toggleMusic = async () => {
    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  if (showLoader) {
    return (
      <div className="loader-page" dir="rtl">
        <div className="loader-stars" aria-hidden="true">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        <div className="loader-circle"></div>

        <h1>جارٍ تجهيز حاجة جميلة جدًا... مخصوص لـ {DISPLAY_NAME} 👑</h1>
        <p className="loader-subtitle">
          شوية كلام من القلب، وصور وذكريات معمولين لبوبتي وبس
        </p>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="password-page" dir="rtl">
        <audio id="loveAudio" loop preload="auto">
          <source src="/love.mp3" type="audio/mpeg" />
        </audio>

        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>

        <div className="floating-hearts" aria-hidden="true">
          <span>✦</span>
          <span>❀</span>
          <span>✿</span>
          <span>✨</span>
          <span>❀</span>
          <span>✦</span>
        </div>

        <div className="password-card glass">
          <div className="password-top-image">
            <img src="/profile.jpg" alt={DISPLAY_NAME} />
            <div className="password-image-overlay"></div>
          </div>

          <div className="lock-icon">🔐</div>
          <div className="cute-badge">👑 رسالة جميلة جدًا لبوبتي</div>

          <h1>اكتبي كلمة السر يا {DISPLAY_NAME}</h1>

          <p className="password-subtext">
            المكان ده معمول مخصوص ليكي يا بوبتي...
            فيه كلام لطيف، ومشاعر صادقة، وذكريات حلوة،
            عشان تشوفي قد إيه إنتِ شخص غالي ومميز جدًا.
          </p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              placeholder="اكتبي كلمة السر هنا"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
            <button type="submit">افتحي رسالة بوبتي 👑</button>
          </form>

          {error && <div className="error-text">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="page" dir="rtl">
      <audio id="loveAudio" loop preload="auto">
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="floating-hearts" aria-hidden="true">
        <span>✦</span>
        <span>❀</span>
        <span>✿</span>
        <span>✨</span>
        <span>❀</span>
        <span>✦</span>
        <span>✿</span>
        <span>✨</span>
      </div>

      <main className="container">
        <section className="opening-note glass">
          <span className="opening-note-badge">✨ أول ما بوبتي تفتح</span>
          <h2>أهلًا يا بوبتي 🤍</h2>
          <p>
            قبل أي حاجة، حبيت يكون أول إحساس يوصلك هنا هو اللطف والجمال،
            لأن بوبتي تستحق كل حاجة حلوة،
            والمكان ده معمول مخصوص عشان يفكّرك قد إيه إنتِ مميزة وغالية.
          </p>
        </section>

        <section className="hero-banner glass">
          <div className="hero-banner-text">
            <span className="small-badge">👑 رسالة بكل الحب لبوبتي</span>

            <h1>
              {content.heroName}
              <span>{content.heroSub}</span>
            </h1>

            <TypingText text={content.cuteText} className="typing-line" />
            <p>{content.heroText}</p>

            <div className="top-actions">
              <button className="btn btn-primary" onClick={toggleMusic}>
                {isPlaying ? "إيقاف الأغنية" : "تشغيل الأغنية"}
              </button>

              <button
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById("counterSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                كمّلي يا بوبتي للنهاية
              </button>
            </div>
          </div>

          <div className="hero-banner-image">
            <img src="/profile.jpg" alt={DISPLAY_NAME} />
            <div className="hero-banner-overlay"></div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card glass">
            <strong>{counter.days}</strong>
            <span>يوم من معرفة بوبتي</span>
          </div>

          <div className="stat-card glass cute-counter-card">
            <div className="pulse-ring"></div>
            <strong>{counter.hours}</strong>
            <span>ساعة من ذكرى بوبتي</span>
          </div>

          <div className="stat-card glass">
            <strong>{memoryCards.length}</strong>
            <span>صور بوبتي</span>
          </div>

          <div className="stat-card glass">
            <strong>∞</strong>
            <span>غلاوة بوبتي</span>
          </div>
        </section>

        <section className="cute-facts-grid">
          {cuteFacts.map((item, index) => (
            <div className="cute-fact-card glass" key={index}>
              <h4>{item.title}</h4>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="full-cover-section glass">
          <div className="full-cover-image">
            <img src="/profile.jpg" alt={DISPLAY_NAME} />
            <div className="full-cover-overlay"></div>
          </div>

          <div className="full-cover-content">
            <div className="scene-pill">{content.meetTitle}</div>
            <div className="scene-date">{content.meetDate}</div>
            <h2>{content.heroName}</h2>
            <h3>{content.heroSub}</h3>
            <p>{content.heroText}</p>
          </div>
        </section>

        <section className="huge-counter-section glass" id="counterSection">
          <span className="small-badge">⏳ عداد بوبتي</span>
          <h2>{content.timerTitle}</h2>
          <p>{content.timerText}</p>

          <div className="huge-counter-grid">
            <div className="huge-counter-box animated-counter">
              <strong>{counter.days}</strong>
              <span>يوم</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.hours}</strong>
              <span>ساعة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.minutes}</strong>
              <span>دقيقة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.seconds}</strong>
              <span>ثانية</span>
            </div>
          </div>

          <div className="music-mini-bar giant-music-bar">
            <div className="music-mini-left">
              <div className={`disc ${isPlaying ? "spin" : ""}`}>🎵</div>
              <div>
                <strong>أغنية بوبتي</strong>
                <small>هتشتغل لو المتصفح سمح</small>
              </div>
            </div>

            <button className="mini-play-btn" onClick={toggleMusic}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </section>

        <section className="wide-message glass">
          <span className="small-badge">💌 كلام لبوبتي</span>
          <h2>شوية كلام يستاهل يوصل لبوبتي</h2>
          <p>{content.longMessage}</p>
        </section>

        <section className="extra-love-section">
          {loveParagraphs.map((paragraph, index) => (
            <div className="extra-love-card glass" key={index}>
              <h3>رسالة لبوبتي {index + 1}</h3>
              <p>{paragraph}</p>
            </div>
          ))}
        </section>

        <section className="love-columns">
          <div className="love-column-card glass">
            <h3>حاجات بحبها في بوبتي</h3>
            <ul>
              {reasons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="love-column-card glass">
            <h3>أنا لما بفتكر بوبتي</h3>
            <ul>
              <li>ببتسم من قلبي</li>
              <li>بفتكر كل حاجة حلوة</li>
              <li>بحس براحة غريبة</li>
              <li>بشتاق لتفاصيل بوبتي الجميلة</li>
              <li>بفتكر قد إيه بوبتي مميزة</li>
              <li>وبتأكد إن مكانة بوبتي كبيرة جدًا</li>
            </ul>
          </div>
        </section>

        <section className="timeline-section glass">
          <div className="section-head">
            <div>
              <h3>Timeline بوبتي</h3>
              <p>مشوار بدأ من 22 / 7 / 2020 ولسه ليه مكان كبير في القلب</p>
            </div>
          </div>

          <div className="timeline-list">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <small>{item.date}</small>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reels-section glass">
          <div className="section-head slider-head">
            <div>
              <h3>7 صور لبوبتي... وورا كل صورة إحساس</h3>
              <p>صور وذكريات معمولين مخصوص عشان بوبتي 🤍</p>
            </div>

            <div className="slider-buttons">
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: 360, behavior: "smooth" });
                }}
              >
                ←
              </button>
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: -360, behavior: "smooth" });
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="cards-slider" id="cardsSlider">
            {memoryCards.map((card, index) => (
              <button
                key={card.id}
                className="animated-text-card"
                onClick={() => setSelectedCard(card)}
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="animated-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="animated-card-body">
                  <small>{card.date}</small>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="big-quotes-section glass">
          <div className="quote-box">
            “بوبتي من الناس اللي جمالهم مش بس في شكلهم... جمالهم الحقيقي في الأثر اللي بيسيبوه في القلب 🤍”
          </div>
          <div className="quote-box">
            “بوبتي مش شبه حد... لأنها بتيجي على هيئة راحة وطمأنينة.”
          </div>
          <div className="quote-box">
            “كل ما في الأمر إن بوبتي كانت وما زالت شخصًا له مكانة خاصة جدًا.”
          </div>
          <div className="quote-box">
            “وجود بوبتي جميل... وتفاصيلها أجمل... وأثرها لا يُنسى 🤍”
          </div>
        </section>

        <section className="gallery-grid-section glass">
          <div className="section-head">
            <div>
              <h3>جاليري بوبتي</h3>
              <p>صور بوبتي بشكل أكبر وأوضح وأجمل</p>
            </div>
          </div>

          <div className="big-gallery-grid">
            {memoryCards.map((item) => (
              <button
                key={item.id}
                className="big-gallery-card"
                onClick={() => setSelectedCard(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="big-gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="extra-love-section">
          <div className="extra-love-card glass">
            <h3>يا بوبتي</h3>
            <p>
              بوبتي من الناس اللي مجرد وجودهم يسيب في القلب راحة وابتسامة وإحساس
              جميل جدًا.
            </p>
          </div>
          <div className="extra-love-card glass">
            <h3>مكانة بوبتي</h3>
            <p>
              مكانة بوبتي كبيرة جدًا، ومهما اتقال فالمشاعر الحلوة ليها أكبر من
              أي كلام.
            </p>
          </div>
          <div className="extra-love-card glass">
            <h3>أمنية لبوبتي</h3>
            <p>
              أتمنى دايمًا أشوف بوبتي بخير، مبسوطة، وابتسامتها منوّرة الدنيا
              كلها حواليها.
            </p>
          </div>
        </section>

        <section className="final-cute-section glass">
          <span className="small-badge">🤍 كلمة أخيرة لبوبتي</span>
          <h2>وفي الآخر يا بوبتي…</h2>
          <p>{content.finalText}</p>

          <div className="final-promise">
            <p>
              كل اللي هنا معمول عشان أوصل لبوبتي إحساس بسيط وواضح:
              إن بوبتي شخص جميل جدًا،
              وإن بوبتي تستحق كلام حلو،
              وإن بوبتي هتفضل دايمًا لها مكانة خاصة ومميزة جدًا في القلب.
            </p>
          </div>
        </section>

        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>

      {selectedCard && (
        <div className="modal" onClick={() => setSelectedCard(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedCard.image} alt={selectedCard.title} />
            </div>

            <div className="modal-content">
              <span className="modal-chip">💌 ذكرى من ذكريات بوبتي</span>
              <small>{selectedCard.date || "ذكرى جميلة لبوبتي"}</small>
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}