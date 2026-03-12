tailwind.config = {
  theme: {
    extend: {
      colors: {
        'dark':'#212121','dark-card':'#2a2a2a','dark-border':'#3a3a3a',
        'accent-lime':'#DCFF50',
        'accent-lime-light':'#E8FF99',
      },
      fontFamily: {
        'sans':['Inter','system-ui','sans-serif'],
        'mono':['JetBrains Mono','monospace'],
      },
      backgroundImage: {
        'gradient-hero':'linear-gradient(135deg,#DCFF50 0%,#DCFF50 100%)',
        'gradient-card':'linear-gradient(135deg,rgba(220,255,80,0.15)0%,rgba(220,255,80,0.08)100%)',
      },
      animation: {
        'float':'float 6s ease-in-out infinite',
        'pulse-slow':'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'glow':'glow 2s ease-in-out infinite alternate',
        'blink':'blink 1s step-end infinite',
      },
      keyframes: {
        float:{ '0%,100%':{transform:'translateY(0px)'},'50%':{transform:'translateY(-20px)'} },
        glow:{ from:{boxShadow:'0 0 20px rgba(220,255,80,0.3)'},to:{boxShadow:'0 0 40px rgba(220,255,80,0.6)'} },
        blink:{ '0%,100%':{opacity:'1'},'50%':{opacity:'0'} },
      },
    }
  }
}