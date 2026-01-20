# REACT KURARKEN YAPILAN İŞLEMLER

- npm create vite@latest . terminale bunu yaz, noktayı da sakın unutma.
- sonra npm install en son npm run dev
- React'te bir listeyi döngüye sokup ekrana basıyorsan (yani .map kullanıyorsan), o döngünün içindeki en dış kutuya (kapsayıcıya) mutlaka bir key vermen gerekir.

# GENEL REACT KURALLARI

Ne Zaman?
✅ .map(...) yazıp birden fazla şeyi alt alta dizdiğin her an.

Nereye?
Döngünün içindeki en baştaki etikete.

- usestate bir şieyi değiştrmek için kullanılır, mutlaka yanında 2 değer ile yazıluır. Mesela const[quantity, setQuantity] = useState() deriz. usestate içini sayfa ilk açıldığında sabir bir şey görünmesini istersek yazarız, yok noş gözüksün dersen "" yazarız sadece. Ayrıca form yazdığın zaman yani içinde bir değşiklik olmasını istediğin durumlarda, o yapıya onchange yapısını kurarsın, onChange={(e) => setDescription(Number(e.target.value))} yani bu tarzda.

- onClick (Daha basit/Yetersiz) onSubmit (Profesyonel/Doğru Yol)
  Tetiklenme Sadece butona "tıklayınca" çalışır. Hem butona tıklayınca hem de Enter'a basınca çalışır.
  Veri Paketi Verileri tek tek elinle toplaman gerekir. Formun içindeki tüm inputları bir bütün olarak ele almanı sağlar.
  Backend İlişkisi Genelde basit işler (sayfayı aç/kapat) için kullanılır. Backend'e "Yeni kayıt oluştur" veya "Giriş yap" emri göndermek için standarttır.
- Eğer ki bir fonksiyon ya da useState proje içindeki birkaç yerde kullanılabilecekse bunu app fonksiyonu içerisinde tanımlayabiliriz.

- Eğer bir fonksiyona parametre (burada item.id) göndermen gerekiyorsa ve bunun sadece tıklanınca çalışmasını istiyorsan, başına o "bekçiyi" (() =>) koymak zorundasın.

- Bir Component yazarken kendine şunları sor:

İçinde .map() döngüsü var mı?

EVET → Kesinlikle Props (movies={movies}) kullan.

Sadece bir div, nav veya açılır/kapanır kutu mu?

EVET → Children ({children}) kullan.

İçeriği dinamik mi üretiliyor (veriden mi geliyor)?

EVET → Props.

Özet:

Kutular (Layout) → children (Lego kutusu)

Listeler (Logic) → props (İş makinesi)

- Ne Zaman Hangisi?
  Tek bir içerik varsa: children daha temizdir. (Genelde Jonas da buna döner).

Birden fazla "delik" varsa: Mesela bir kutunun hem "Başlığına" (header) hem "Gövdesine" (body) ayrı şeyler koyacaksan, element gibi prop'lar hayat kurtarır.

Örnek: <SplitScreen left={<List />} right={<Detail />} />

/\*
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 /52 / 62 / 74 / 86 / 98
\*/

/\*
FULL STAR

<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="#000"
stroke="#000"

> <path

    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"

/>
</svg>

EMPTY STAR

<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="#000"

> <path

    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"

/>
</svg>

\*/
