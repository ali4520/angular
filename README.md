# Gereksinimler
Angular CLI -> npm install -g @angular/cli

# Kurulum 
İndirdiğiniz dosyaları bir klasöre toplayın ve bu klasörü masaüstüne atın.

# 1. Adım 
"src/app/app.module.ts" dosyasını bir kod editörü ile açın ve providers kısmındaki
apiURL'in userValue değerini "http://siteadresiniz.com/backend/api" şeklinde kendinize uygun olacak şekilde değiştirin.

# 2. Adım
Bir cmd komut satırı açarak klasöre gidin örneğin kaynak kodları masaüstünde blog isimli bir klasörün içine attıysanız 
"cd Desktop/Blog" yazın ve enter'a basın.

# 3. Adım

"ng build --prod" yazıp enter'a basın angular cli sizin için projeyi build edicektir.
Proje dosyaları blog/dist klasörü altına build edilecektir.[FTP ye dist'in içindeki dosyaları yükleceksiniz.]

# 4. Adım

Dosyaları FTP'ye yükledikten sonra anadizine .htaccess isimli dosya oluşturun ve içine aşağıdaki kodları yazın:

RewriteEngine On
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]
RewriteRule ^ /index.html

# 5. Adım

- FTP'de dosyaların kurulu olduğu dizine backend isimli bir klasör oluşturun.
- backend.zip dosyasının içindekilerin hepsini buraya yükleyin.
- Bir tane veritabanı oluşturun ve db.sql 'i bu veritabanına import edin.
- application/config/database.php dosyasını açın ve gerekli alanları doldurun.

admin paneline siteadresi.com/backend şeklinde ulaşabilirsiniz.

admin email : admin@admin.com
admin şifre : 123456


