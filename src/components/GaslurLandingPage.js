import styles from "./GaslurLandingPage.module.css";

const GaslurLandingPage = () => {
  return (
    <div className={styles.gaslurLandingPage}>
      <div className={styles.gaslurLandingPageChild} />
      <div className={styles.gaslurLandingPageItem} />
      <div className={styles.gaslurLandingPageInner} />
      <div className={styles.discoverCollectAnd}>
        Discover, collect, and charity in extraordinary NFT marketplace
      </div>
      <div className={styles.inAeneanPosuere}>
        In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
        vestibulum nibh mi venenatis
      </div>
      <div className={styles.exploreWrapper}>
        <div className={styles.explore}>Explore</div>
      </div>
      <div className={styles.createWrapper}>
        <div className={styles.explore}>Create</div>
      </div>
      <div className={styles.signInParent}>
        <div className={styles.signIn}>sign in</div>
        <div className={styles.createParent}>
          <div className={styles.create1}>create</div>
          <div className={styles.groupChild} />
        </div>
      </div>
      <img className={styles.heart24Icon} alt="" src="/heart24.svg" />
      <div className={styles.laura}>Laura</div>
      <div className={styles.weAreHere}>WE ARE HERE</div>
      <div className={styles.weth}>0.21 Weth</div>
      <img className={styles.groupIcon} alt="" src="/group-1248.svg" />
      <div className={styles.div}>25</div>
      <div className={styles.homeParent}>
        <b className={styles.home}>Home</b>
        <div className={styles.myProfile}>My profile</div>
        <div className={styles.activity}>activity</div>
        <div className={styles.howItWorks}>how it works</div>
        <div className={styles.groupItem} />
      </div>
      <img
        className={styles.unsplashog44d93injkIcon}
        alt=""
        src="pic.png"
      />
      <b className={styles.fastech}>FasTech</b>
    </div>
  );
};

export default GaslurLandingPage;
