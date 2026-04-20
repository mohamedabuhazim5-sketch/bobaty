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
      heroSub: "يا أجمل صدفة وأحنّ شخص دخل حياتي 🤍✨",
      heroText:
        "المكان ده معمول مخصوص ليكي يا بوبتي... فيه كلام من القلب، ومشاعر صادقة، وحاجات كتير حبيت أقولها ليكي بطريقة مختلفة ولطيفة تليق بيكي وبمكانتك عندي.",
      meetTitle: "من أول ما عرفتك 🤍",
      meetDate: "22 / 7 / 2020",
      timerTitle: "من أول لقاء بينا 🤍",
      timerText:
        "من اليوم ده وحياتي بقى فيها إحساس مختلف... بقى فيها شخص مميز، وجوده لوحده كان كفاية يغيّر شكل أي يوم عادي ويخليه أحلى.",
      longMessage:
        "يا بوبتي... يمكن الكلام مهما طال ما يوصفش اللي جوايا ناحيتك، لكن المؤكد إنك بقيتي جزء جميل جدًا من قلبي ومن تفاصيل أيامي. وجودك فرق، وكلامك فرق، وحتى أبسط حاجة منك كان ليها أثر كبير جوايا.",
      cuteText:
        "رسالة صغيرة متكتبة بحب كبير... مخصوص لأجمل بوبتي في الدنيا 🤍",
      finalText:
        "وفي الآخر أحب أقولك إنك من أجمل الناس اللي دخلوا حياتي، وإن مكانك عندي كبير أوي، وهيفضل كبير. يا رب دايمًا أشوفك مبسوطة، وضحكتك ما تغيبش، وأفضل سبب في إن يومك يكون ألطف وأجمل زي ما إنتِ دايمًا بتعملي في قلبي 🤍",
    }),
    []
  );

  const memoryCards = useMemo(
    () => [
      {
        id: 1,
        title: "أول مرة",
        image: "/1.jpg",
        date: "22 / 7 / 2020",
        text: "من أول لقاء بينا كان واضح إنك مش شبه أي حد... كان فيكي حاجة جميلة شدت قلبي من أول لحظة.",
      },
      {
        id: 2,
        title: "ضحكتك",
        image: "/2.jpg",
        date: "أجمل تفصيلة",
        text: "ضحكتك من الحاجات اللي بتغيّر أي يوم وتخليه أهدى وأجمل من غير أي مجهود.",
      },
      {
        id: 3,
        title: "وجودك",
        image: "/3.jpg",
        date: "راحة قلبي",
        text: "وجودك في حياتي كان دايمًا حاجة مريحة... كأن الدنيا بتهدى لمجرد إنك موجودة.",
      },
      {
        id: 4,
        title: "كلامك",
        image: "/4.jpg",
        date: "أثر حلو",
        text: "كلامك ليه إحساس مختلف، بسيط لكن بيوصل للقلب بسرعة وبيسيب جواه حاجة حلوة.",
      },
      {
        id: 5,
        title: "عيونك",
        image: "/5.jpg",
        date: "نظرة ما تتنسيش",
        text: "في عيونك هدوء وجمال يخلو أي حد يبصلك ويحس إنك مميزة فعلًا من غير كلام كتير.",
      },
      {
        id: 6,
        title: "الونس",
        image: "/6.jpg",
        date: "أحلى شعور",
        text: "معاكي حتى اللحظات العادية بيبقى ليها طعم مختلف... ونسك كان دايمًا من أجمل الحاجات.",
      },
      {
        id: 7,
        title: "بوبتي",
        image: "/7.jpg",
        date: "أغلى حد",
        text: "مهما كتبت، هتفضلي بالنسبة لي شخص غالي جدًا... وشخص له مكانة ما ينفعش تتشبه بحد تاني.",
      },
    ],
    []
  );

  const timelineItems = useMemo(
    () => [
      {
        title: "أول لقاء",
        date: "22 / 7 / 2020",
        text: "هنا بدأت الحكاية... وبدأ إحساس جميل ما اتنساش.",
      },
      {
        title: "أول راحة",
        date: "بعدها بشوية",
        text: "مع الوقت بدأت أحس إنك شخص مختلف فعلًا، وقريب من القلب بطريقة مميزة.",
      },
      {
        title: "ذكريات كتير",
        date: "في الطريق",
        text: "كل موقف، وكل كلمة، وكل لحظة معاكي خلت في رصيد كبير من المشاعر والذكريات الحلوة.",
      },
      {
        title: "دلوقتي",
        date: "النهارده",
        text: "لسه شايفك بنفس الجمال والمكانة، ولسه عندي نفس الإحساس الحلو ليكي.",
      },
    ],
    []
  );

  const cuteFacts = useMemo(
    () => [
      { title: "اسم اللي في قلبي", value: DISPLAY_NAME },
      { title: "أول لقاء", value: "22/7/2020" },
      { title: "عدد الذكريات", value: "7" },
      { title: "مكانك", value: "كبير جدًا" },
    ],
    []
  );

  const reasons = useMemo(
    () => [
      "ضحكتك",
      "كلامك",
      "طيبتك",
      "حنانك",
      "وجودك",
      "أسلوبك",
      "جمالك",
      "راحة قلبي معاكي",
    ],
    []
  );

  const loveParagraphs = useMemo(
    () => [
      "يا بوبتي... في ناس وجودهم بيبقى عادي، وفي ناس وجودهم لوحده بيعمل فرق كبير، وإنتِ من الناس اللي وجودهم له معنى جميل جدًا في القلب.",
      "كل حاجة فيكي ليها طابع خاص؛ طريقتك، كلامك، ضحكتك، وحتى هدوءك... كل ده بيخليكي مميزة بشكل صعب يتوصف.",
      "أنا بحب فيكي إنك شخص يسيب أثر حلو من غير ما يحاول، ويكفي إن مجرد التفكير فيكي بيخليني أبتسم من قلبي.",
      "ولو اتكلمت عن مكانتك، فالحقيقة إنك من الناس القليلة اللي ليهم قيمة كبيرة جدًا ومشاعرهم تفضل محفوظة جوا القلب مهما مر وقت.",
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

        <h1>جارِ تجهيز حاجة حلوة جدًا... مخصوص لـ {DISPLAY_NAME} 👑</h1>
        <p className="loader-subtitle">
          شوية كلام من القلب... وصور وذكريات معمولين ليكي إنتِ وبس
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
          <div className="cute-badge">👑 رسالة مميزة جدًا لبوبتي</div>

          <h1>اكتبي كلمة السر يا {DISPLAY_NAME}</h1>

          <p className="password-subtext">
            المكان ده معمول ليكي بكل حب...
            فيه شوية مشاعر صادقة، وكلام حلو، وذكريات لطيفة،
            عشان تشوفي قد إيه إنتِ شخص غالي ومميز جدًا.
          </p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              placeholder="اكتبي كلمة السر هنا"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
            <button type="submit">افتحي الرسالة 👑</button>
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
          <span className="opening-note-badge">✨ أول ما تفتحي</span>
          <h2>أهلًا يا بوبتي 🤍</h2>
          <p>
            قبل أي حاجة... حبيت يكون أول إحساس يوصلك هنا هو اللطف والجمال،
            لأنك فعلًا تستحقي كل حاجة حلوة،
            والمكان ده معمول مخصوص عشان يفكرك قد إيه إنتِ مميزة وغالية.
          </p>
        </section>

        <section className="hero-banner glass">
          <div className="hero-banner-text">
            <span className="small-badge">👑 رسالة بكل الحب ليكي</span>

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
                كمّلي للنهاية
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
            <span>يوم من معرفتنا</span>
          </div>

          <div className="stat-card glass cute-counter-card">
            <div className="pulse-ring"></div>
            <strong>{counter.hours}</strong>
            <span>ساعة من الذكرى</span>
          </div>

          <div className="stat-card glass">
            <strong>{memoryCards.length}</strong>
            <span>صور وذكريات</span>
          </div>

          <div className="stat-card glass">
            <strong>∞</strong>
            <span>غلاوة</span>
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
          <span className="small-badge">⏳ عداد الذكرى</span>
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
                <strong>أغنيتنا</strong>
                <small>هتشتغل لو المتصفح سمح</small>
              </div>
            </div>

            <button className="mini-play-btn" onClick={toggleMusic}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </section>

        <section className="wide-message glass">
          <span className="small-badge">💌 كلام جميل ليكي</span>
          <h2>شوية كلام يستاهل يوصل لبوبتي</h2>
          <p>{content.longMessage}</p>
        </section>

        <section className="extra-love-section">
          {loveParagraphs.map((paragraph, index) => (
            <div className="extra-love-card glass" key={index}>
              <h3>رسالة {index + 1}</h3>
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
            <h3>أنا لما بفتكرك</h3>
            <ul>
              <li>ببتسم من قلبي</li>
              <li>بفتكر كل حاجة حلوة</li>
              <li>بحس براحة غريبة</li>
              <li>بشتاق للتفاصيل الجميلة</li>
              <li>بفتكر قد إيه إنتِ مميزة</li>
              <li>وبتأكد إن مكانك كبير جدًا</li>
            </ul>
          </div>
        </section>

        <section className="timeline-section glass">
          <div className="section-head">
            <div>
              <h3>Timeline الحكاية</h3>
              <p>مشوار بدأ من 22 / 7 / 2020 ولسه له مكان في القلب</p>
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
              <h3>7 صور... وكل صورة وراها إحساس</h3>
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
            “في ناس جمالهم مش بس في شكلهم... جمالهم الحقيقي في الأثر اللي بيسيبوه في القلب 🤍”
          </div>
          <div className="quote-box">
            “وبعض الأشخاص لا يشبهون أحدًا... لأنهم يأتون على هيئة راحة وطمأنينة.”
          </div>
          <div className="quote-box">
            “كل ما في الأمر أن بوبتي كانت وما زالت شخصًا له مكانة خاصة جدًا.” 
          </div>
          <div className="quote-box">
            “وجودك جميل... وتفاصيلك أجمل... وأثرك لا يُنسى 🤍”
          </div>
        </section>

        <section className="gallery-grid-section glass">
          <div className="section-head">
            <div>
              <h3>جاليري {DISPLAY_NAME}</h3>
              <p>الصور بشكل أكبر وأوضح وأجمل</p>
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
              إنتِ من الناس اللي مجرد وجودهم بيبقى كفاية يسيبوا في القلب راحة
              وابتسامة وإحساس جميل جدًا.
            </p>
          </div>
          <div className="extra-love-card glass">
            <h3>مكانتك</h3>
            <p>
              مكانك كبير... وكبير جدًا كمان، ومهما اتقال فالمشاعر الحلوة ليكي
              أكبر من أي كلام.
            </p>
          </div>
          <div className="extra-love-card glass">
            <h3>أمنية حلوة</h3>
            <p>
              أتمنى دايمًا أشوفك بخير، مبسوطة، وضحكتك منورة الدنيا كلها حواليكي.
            </p>
          </div>
        </section>

        <section className="final-cute-section glass">
          <span className="small-badge">🤍 كلمة أخيرة</span>
          <h2>وفي الآخر…</h2>
          <p>{content.finalText}</p>

          <div className="final-promise">
            <p>
              كل اللي هنا معمول عشان أوصلّك إحساس بسيط وواضح:
              إنك شخص جميل جدًا،
              وإنك تستحقي كلام حلو،
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
              <span className="modal-chip">💌 ذكرى مختارة</span>
              <small>{selectedCard.date || "ذكرى جميلة"}</small>
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}