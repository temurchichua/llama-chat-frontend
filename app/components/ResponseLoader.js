const ResnposeLoader = () => {
  return (
    <svg height="30" width="40" className="[&>*]:[animation-duration:0.8s]">
      <circle cx="10" cy="15" r="2.5" className="animate-pulse" />
      <circle
        cx="20"
        cy="15"
        r="2.5"
        className="animate-pulse  [animation-delay:0.2s]"
      />
      <circle
        cx="30"
        cy="15"
        r="2.5"
        className="animate-pulse  [animation-delay:0.4s]"
      />
    </svg>
  );
};

export default ResnposeLoader;
