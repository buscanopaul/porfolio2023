import SocialItem from "./SocialItem";

function Social() {
  return (
    <div className="relative max-w-[400px] mx-auto flex items-center justify-around py-28">
      <SocialItem
        title="facebook"
        link="https://www.facebook.com/paullorenz.buscano"
      />
      <SocialItem
        title="youtube"
        link="https://www.youtube.com/@developerpaul46/featured"
      />
      <SocialItem title="medium" link="https://medium.com/@buscano.paul" />
      <SocialItem
        title="behance"
        link="https://www.behance.net/paulbuscano003"
      />
      <SocialItem title="github" link="https://github.com/buscanopaul" />
    </div>
  );
}

export default Social;
