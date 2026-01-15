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
