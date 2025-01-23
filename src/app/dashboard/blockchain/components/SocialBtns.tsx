const SocialBtns = () => {
  return (
    <div className="flex items-center">
      <a
        target="_blank"
        href="https://www.youtube.com/@terrancrypt"
        className="p-2 rounded-lg hover:bg-slate-200 transition-colors"
      >
        <img className="w-6 h-6" src="/blockchain/youtube.svg" alt="youtube icon" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/terrancrypt/"
        className="p-2 rounded-lg hover:bg-slate-200 transition-colors"
      >
        <img className="w-6 h-6" src="/blockchain/facebook.svg" alt="facebook icon" />
      </a>
      <a
        target="_blank"
        href="https://github.com/terrancrypt"
        className="p-2 rounded-lg hover:bg-slate-200 transition-colors"
      >
        <img className="w-6 h-6" src="/blockchain/github.svg" alt="github icon" />
      </a>
    </div>
  );
};

export default SocialBtns;
