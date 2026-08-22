export type Language = 'am' | 'en' | 'om' | 'ti'

export const defaultLanguage: Language = 'am'

export const languageOptions = [
  { code: 'am' as const, label: 'አማርኛ' },
  { code: 'en' as const, label: 'English' },
  { code: 'om' as const, label: 'Afaan Oromoo' },
  { code: 'ti' as const, label: 'ትግርኛ' },
]

export const translations = {
  nav: {
    language: { am: 'ቋንቋ', en: 'Language', om: 'Afaan', ti: 'ቋንቋ' },
    home: { am: 'መነሻ', en: 'Home', om: 'Seensa', ti: 'መነሻ' },
    about: { am: 'ስለ እኔ', en: 'About', om: 'Waa’ee ko', ti: 'ስለ ኔ' },
    skills: { am: 'ክህሎቶች', en: 'Skills', om: 'Dandeettii', ti: 'ክህሎታት' },
    projects: { am: 'ፕሮጀክቶች', en: 'Projects', om: 'Piroojektota', ti: 'ፕሮጀክቶች' },
    services: { am: 'አገልግሎቶች', en: 'Services', om: 'Tajaajila', ti: 'ኣገልግሎታት' },
    contact: { am: 'አግኙኝ', en: 'Contact', om: 'Qunnamtii', ti: 'ርክብ' },
  },
  hero: {
    greeting: { am: 'ሰላም፣ እኔ', en: 'Hello, I’m', om: 'Akkam bultan, ani', ti: 'ሰላም፣ ኣነ' },
    role: { am: 'የድረገፅ ልማት ባለሙያ ነኝ ።', en: 'Full Stack Web Developer', om: 'Misooma Webii Full Stack', ti: 'ድሕረ ነጻ ድረገፅ ገንቢ' },
    intro: {
      am: 'ዘመናዊ፣ ለተለያዩ መሳሪያዎች ተስማሚ (ምላሽ ሰጪ) እንዲሁም ከፍተኛ አፈጻጸም ያላቸው፣ በእውነተኛው ህይወት ውስጥ ያሉ ችግሮችን የሚፈቱ የድረገፅ አፕሊኬሽኖችን እሰራለሁ።',
      en: 'I build modern, responsive, and high-performance web applications that solve real-world problems.',
      om: 'Ani applikeeshinii web ammayyaa, kan bifa adda addaatti qabatu, fi humna olaanaa qabu, rakkoo dhugaa addunyaa keessaa furan nan ijaara.',
      ti: 'ኣነ ናይ ዘመናዊ፣ ንዝተፈላለዩ መሳርሕቲ ዝምዕዓል፣ ከምኡውን ልዑል ክእለት ዘለዎ ናይ ድረገፅ ኣፕሊኬሽናት እሰርሕ፣ እዞም ነቲ ኣብ ህይወት ዘሎ ናይ ሓቂ ጸገማት ዝፈትሑ እዮም።',
    },
    hire: { am: 'አግኙኝ', en: 'Contact Me', om: 'Na Quunama', ti: 'ርክብ' },
    work: { am: 'ስራዎቼን ይመልከቱ', en: 'View My Work', om: 'Hojii Koo ilaali', ti: 'ስራይ ርአ' },
  },
  tech: { title: { am: 'ክህሎቶች', en: 'Skills', om: 'Dandeettii', ti: 'ክህሎታት' } },
  about: {
    title: { am: 'ስለ እኔ', en: 'About Me', om: 'Waa’ee Koo', ti: 'ስለ እኔ' },
    text: {
      am: 'እኔ ሙሉ ቁልል (Full Stack) የድረገፅ ገንቢ ነኝ፣ በዘመናዊ ቴክኖሎጂዎች የድረገፅ አፕሊኬሽኖችን በመገንባት ልምድ ያለኝ እንዲሁም በስራዬ ላይ ከፍተኛ ፍቅር እና ጉጉት ያለኝ ነኝ።',
      en: 'I am a passionate Full Stack Web Developer with experience in building web applications using modern technologies.',
      om: 'Ani Full Stack Web Developer fedhii guddaa qabuu fi teknoolojii ammayyaa fayyadamuun applikeeshinii web ijaaruu keessatti muuxannoo qabu.',
      ti: 'ኣነ ሙሉ ቁልል (Full Stack) ናይ ድረገፅ መሃንዲስ እየ፣ ብዘመናዊ ቴክኖሎጂታት ናይ ድረገፅ ኣፕሊኬሽናት ብምስራሕ ተመክሮ ዘለኒ፣ ንስራሕይ ድማ ብጋለ ስሜት እፈትዎ እየ።',
    },
    cards: {
      experience: { am: 'ልምድ', en: 'Experience', om: 'Muuxannoo', ti: 'ልምድ' },
      education: { am: 'ትምህርት', en: 'Education', om: 'Barnoota', ti: 'ትምህርት' },
      location: { am: 'አካባቢ', en: 'Location', om: 'Iddoo', ti: 'ኣካባቢ' },
      interests: { am: 'ፍላጎቶች', en: 'Interests', om: 'Fedhii', ti: 'ፍላጎታት' },
    },
  },
  skills: {
    title: { am: 'ክህሎቶች', en: 'Skills', om: 'Dandeettii', ti: 'ክህሎታት' },
    intro: {
      am: 'የቴክኖሎጂ ክህሎቶች በአካባቢ በአካባቢ የተደራጁ ናቸው።',
      en: 'A selection of my core technical skills grouped by area.',
      om: 'Dandeettii teknooloojii kootti iddoo iddoo ramadame.',
      ti: 'ናይ ቴክኖሎጂ ክህሎታት ብመሰረት ተደራጊረዋል።',
    },
    frontend: { am: 'ፊት ገፅ', en: 'Frontend', om: 'Fuula dura', ti: 'ፊት ገጽ' },
    backend: { am: 'ጀርባ ገፅ', en: 'Backend', om: 'Duubatti', ti: 'ተከታታይ ልምድ' },
    database: { am: 'ዳታቤዝ', en: 'Database', om: 'Dhaabataa', ti: 'ዳታቤዝ' },
    tools: { am: 'መሳሪያዎች', en: 'Tools', om: 'Meeshaale', ti: 'መሳሪያታት' },
  },
  projects: {
    title: { am: 'ፕሮጀክቶች', en: 'Projects', om: 'Piroojektota', ti: 'ፕሮጀክቶች' },
    intro: {
      am: 'የእኔ ስራዎች የዘመናዊ ነገር እና የአፈጻጸም ያላቸው የቴክኖሎጂ ፕሮጀክቶች ናቸው።',
      en: 'A selection of projects showcasing modern UI, API design and performance.',
      om: 'Piroojektota garaagarraaf modela webii fi performance.',
      ti: 'ናይ ዘመናዊ ድረገፅ ዕቃታት ፕሮጀክቶች ምርኣይ።',
    },
  },
  services: {
    title: { am: 'አገልግሎቶች', en: 'Services', om: 'Tajaajila', ti: 'ኣገልግሎታት' },
    intro: {
      am: 'ለዘመናዊ ድረገፅ ምርቶች እና ቡድኖች የሚያስፈልጉ አገልግሎቶችን እሰጣለሁ።',
      en: 'I offer a range of services for modern web products and teams.',
      om: 'Tajaajila adda addaa fooyya’iinsa webii fi gareewwan keetii ni kenna.',
      ti: 'ኣነ ናይ ዘመናዊ ድረገፅ ምርታት እና ቡድናት ኣገልግሎታት እለሚካፈል።',
    },
  },
  contact: {
    title: { am: 'አግኙኝ', en: 'Contact', om: 'Qunnamtii', ti: 'ርክብ' },
    intro: {
      am: 'ያግኙኝ — ለፍሪላንስ ሥራ እና ለሚስቡ ፕሮጀክቶች ዝግጁ ነኝ።',
      en: 'Get in touch — I’m available for freelance work and interesting projects.',
      om: 'Na quunnami — Ani hojii frilaansii fi projektota hawwataa ta’aniif qophii dha.',
      ti: 'ተራኸቡኒ — ንፍሪላንስ ስራሕን ንዜድንቕ ፕሮጀክታትን ዝግጁ እየ።',
    },
    info: { am: 'መረጃ አግኙኝ', en: 'Contact Info', om: 'Odeeffannoo Qunnamtii', ti: 'መረጢ ርክብ' },
    send: { am: 'መልእክት ላክ', en: 'Send Message', om: 'Ergaa ergi', ti: 'መልእክት ልእኽ' },
    sending: { am: 'በመላክ ላይ...', en: 'Sending...', om: 'Ergaa erga jira...', ti: 'መልእክት በምልክት...' },
    success: { am: 'መልእክትዎን ተቀባይነት አግኝተናል።', en: 'Thanks for your message. I’ll get back to you soon.', om: 'Ergaa keessan galateeffadhaa. Dhiibbaa keessan dafee deebina.', ti: 'ንመልእክትኩም እየተፈለጠ። ቀሩም እይመለሳለን።' },
    error: { am: 'መልእክትዎን ለማስተካከል ተሳክቷል።', en: 'Sorry, your message could not be sent right now. Please try again or email me directly.', om: 'Ergaan keessan amma hin ergamne. Maaloo irra deebi’ii yaali.', ti: 'መልእክትኩም እንተ ኣይተላኸረን እባኽን እንደገና ፈትኑ።' },
    placeholders: {
      name: { am: 'ስምዎ', en: 'Your name', om: 'Maqaa keessan', ti: 'ሽምኩም' },
      email: { am: 'ኢሜል', en: 'Your email', om: 'Imeelii keessan', ti: 'ኢሜልኩም' },
      subject: { am: 'ርዕስ', en: 'Subject', om: 'Mata duree', ti: 'ርዕሲ' },
      message: { am: 'መልእክት', en: 'Message', om: 'Ergaa', ti: 'መልእክት' },
    },
    required: {
      name: { am: 'እባክዎ ስምዎን ያስገቡ።', en: 'Please enter your name.', om: 'Maaloo maqaa keessan galchaa.', ti: 'በጃኹም ሽምኩም ኣእቱ።' },
      subject: { am: 'እባክዎ ርዕስ ያስገቡ።', en: 'Please enter a subject.', om: 'Maaloo mata duree galchaa.', ti: 'በጃኹም ርዕሲ ኣእቱ።' },
      message: { am: 'እባክዎ መልእክትዎን ያስገቡ።', en: 'Please enter your message.', om: 'Maaloo ergaa keessan galchaa.', ti: 'በጃኹም መልእክትኩም ኣእቱ።' },
    },
  },
  footer: {
    text: { am: 'ዘመናዊ የድረገፅ ተሞክሮዎችን በአንክበብ እገነባለሁ።', en: 'Building modern web experiences with care.', om: 'Muummee webii haaraa keessan itti gaariin ni ijaara.', ti: 'ዘመናዊ ድረገፅ ልምድን ብትኩረት ኢያዕቀበል።' },
    rights: { am: 'ሁሉም መብቶች የተጠበቁ ናቸው።', en: 'All rights reserved.', om: 'Mirga hunda eegameera.', ti: 'ኩሉ መብት የተሓለወ እዩ።' },
  },
  common: {
    email: { am: 'ኢሜል', en: 'Email', om: 'Imeelii', ti: 'ኢሜል' },
    name: { am: 'ስም', en: 'Name', om: 'Maqaa', ti: 'ሽም' },
    subject: { am: 'ርዕስ', en: 'Subject', om: 'Mata duree', ti: 'ርዕሲ' },
    message: { am: 'መልእክት', en: 'Message', om: 'Ergaa', ti: 'መልእክት' },
  },
}
