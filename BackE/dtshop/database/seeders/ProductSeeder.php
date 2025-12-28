<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $oppo = '<ul>
            <li>
              <p>
                OPPO là thương hiệu điện thoại thông minh hàng đầu toàn cầu, nổi tiếng với công nghệ camera tiên tiến và thiết kế sang trọng.&nbsp;
              </p>
            </li>
            <li>
              <p>Cảm biến camera chất lượng cao với công nghệ AI</p>
            </li>
            <li>
              <p>Màn hình AMOLED sắc nét với tần số làm mới cao</p>
            </li>
            <li>
              <p>Hiệu năng mạnh mẽ với bộ xử lý Snapdragon</p>
            </li>
            <li>
              <p>Pin dung lượng lớn với sạc nhanh</p>
            </li>
            <li>
              <p>Hệ thống làm mát hiệu quả</p>
            </li>
            <li>
              <p>Thiết kế nhỏ gọn và nhẹ</p>
            </li>
            <li>
              <p>Tính năng bảo mật sinh học tiên tiến</p>
            </li>
          </ul>';

        $samsung = '<ul>
            <li>
              <p>
                Samsung là công ty công nghệ hàng đầu thế giới, nổi tiếng với dòng sản phẩm Galaxy có hiệu năng mạnh mẽ và đẳng cấp cao.&nbsp;
              </p>
            </li>
            <li>
              <p>Màn hình AMOLED Vision Booster với độ sáng cực cao</p>
            </li>
            <li>
              <p>Bộ xử lý Snapdragon Gen 3 Leading Version</p>
            </li>
            <li>
              <p>Camera 200MP với AI processing</p>
            </li>
            <li>
              <p>Pin 5000mAh sạc siêu nhanh</p>
            </li>
            <li>
              <p>One UI 6 với tính năng AI tích hợp</p>
            </li>
            <li>
              <p>Thiết kế Gorilla Glass Armor bền chắc</p>
            </li>
            <li>
              <p>Hỗ trợ S Pen cho các model cao cấp</p>
            </li>
          </ul>';

        $iphone = '<ul>
            <li>
              <p>
                iPhone là dòng sản phẩm biểu tượng của Apple, nổi tiếng với thiết kế sang trọng và hệ điều hành iOS mượt mà.&nbsp;
              </p>
            </li>
            <li>
              <p>Chip A18 Pro với hiệu năng xử lý nhanh nhất</p>
            </li>
            <li>
              <p>Camera Pro với tính năng Photographic Styles</p>
            </li>
            <li>
              <p>Màn hình Super Retina XDR sắc nét</p>
            </li>
            <li>
              <p>Pin kéo dài cả ngày sử dụng</p>
            </li>
            <li>
              <p>Titanium design cao cấp và bền bỉ</p>
            </li>
            <li>
              <p>Công nghệ Face ID an toàn</p>
            </li>
            <li>
              <p>Hỗ trợ Apple Intelligence</p>
            </li>
          </ul>';

        $xiaomi = '<ul>
            <li>
              <p>
                Xiaomi là thương hiệu công nghệ Trung Quốc nổi bật, cung cấp sản phẩm có tỉ lệ giá/hiệu năng tốt nhất thị trường.&nbsp;
              </p>
            </li>
            <li>
              <p>Camera Light Fusion 900 công nghệ độc quyền</p>
            </li>
            <li>
              <p>Snapdragon 8 Gen 3 Leading Version</p>
            </li>
            <li>
              <p>Màn hình AMOLED 1.5K LTPO</p>
            </li>
            <li>
              <p>Pin 5500mAh HyperCharge 120W</p>
            </li>
            <li>
              <p>Thiết kế Aerospace Grade titanium</p>
            </li>
            <li>
              <p>Hệ thống tản nhiệt vapor chamber</p>
            </li>
            <li>
              <p>Hỗ trợ sạc không dây và sạc ngược</p>
            </li>
          </ul>';

        $img = '/assets/users/images/Features/feet';

        $products = [
            [
                'name'=> 'OPPO Find X7',
                'img'=> $img . '1.jpg',
                'price'=> 18990000,
                'inventory'=> rand(100, 650),
                'description'=> $oppo,
                'sort_description'=> 'Flagship cao cấp OPPO với camera periscope AI, màn hình AMOLED tràn viền và thiết kế tinh tế.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 1
            ],
            [
                'name'=> 'OPPO A78',
                'img'=> $img . '2.jpg',
                'price'=> 8990000,
                'inventory'=> rand(100, 650),
                'description'=> $oppo,
                'sort_description'=> 'Điện thoại tầm trung OPPO với camera 50MP, pin 5000mAh, giá cả phải chăng cho người dùng phổ thông.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 1
            ],
            [
                'name'=> 'OPPO Reno 11',
                'img'=> $img . '3.jpg',
                'price'=> 12990000,
                'inventory'=> rand(100, 650),
                'description'=> $oppo,
                'sort_description'=> 'Dòng Reno cao cấp với camera tele zoom 3x, thiết kế thời trang, hiệu năng Snapdragon 8 Gen 1 Leading.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 1
            ],
            [
                'name'=> 'OPPO F27',
                'img'=> $img . '4.jpg',
                'price'=> 8990000,
                'inventory'=> rand(100, 650),
                'description'=> $oppo,
                'sort_description'=> 'Điện thoại tập trung selfie OPPO F27 với camera trước 32MP, màn hình 6.7 inch, thiết kế bắt mắt.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 1
            ],
            [
                'name'=> 'Samsung Galaxy S24',
                'img'=> $img . '5.jpg',
                'price'=> 22990000,
                'inventory'=> rand(100, 650),
                'description'=> $samsung,
                'sort_description'=> 'Flagship Samsung 2024 với Snapdragon 8 Gen 3, camera 200MP, One UI 6 và AI-powered features.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 2
            ],
            [
                'name'=> 'Samsung Galaxy A55',
                'img'=> $img . '6.jpg',
                'price'=> 10990000,
                'inventory'=> rand(100, 650),
                'description'=> $samsung,
                'sort_description'=> 'Galaxy A55 tầm trung Samsung với Exynos 1480, camera 50MP, pin 5000mAh, hiệu năng vượt trội.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 2
            ],
            [
                'name'=> 'Samsung Galaxy Z Fold 6',
                'img'=> $img . '7.jpg',
                'price'=> 42990000,
                'inventory'=> rand(100, 650),
                'description'=> $samsung,
                'sort_description'=> 'Điện thoại gập Samsung Z Fold 6 với Snapdragon 8 Gen 3, màn hình AMOLED 7.6 inch, mỏng nhẹ.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 2
            ],
            [
                'name'=> 'Samsung Galaxy Tab S10',
                'img'=> $img . '8.jpg',
                'price'=> 19990000,
                'inventory'=> rand(100, 650),
                'description'=> $samsung,
                'sort_description'=> 'Máy tính bảng Samsung Tab S10 với Snapdragon 8 Gen 3, màn hình AMOLED 14.6 inch, S Pen tích hợp.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 2
            ],
            [
                'name'=> 'iPhone 16 Pro Max',
                'img'=> $img . '9.jpg',
                'price'=> 34990000,
                'inventory'=> rand(100, 650),
                'description'=> $iphone,
                'sort_description'=> 'iPhone Pro Max 2024 Apple với chip A18 Pro, camera 12MP f/1.2, màn hình 6.9 inch Super Retina XDR.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 3
            ],
            [
                'name'=> 'iPhone 16 Pro',
                'img'=> $img . '10.jpg',
                'price'=> 28990000,
                'inventory'=> rand(100, 650),
                'description'=> $iphone,
                'sort_description'=> 'iPhone 16 Pro Apple với A18 Pro, camera Pro 12MP, màn hình 6.3 inch, thiết kế titanium bền chắc.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 3
            ],
            [
                'name'=> 'iPhone 16',
                'img'=> $img . '11.jpg',
                'price'=> 22990000,
                'inventory'=> rand(100, 650),
                'description'=> $iphone,
                'sort_description'=> 'iPhone 16 tiêu chuẩn Apple với chip A18, dual camera, màn hình 6.1 inch, giá cả phù hợp.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 3
            ],
            [
                'name'=> 'iPhone 15',
                'img'=> $img . '12.jpg',
                'price'=> 19990000,
                'inventory'=> rand(100, 650),
                'description'=> $iphone,
                'sort_description'=> 'iPhone 15 Apple với chip A17 Pro, Dynamic Island, camera 48MP, cổng USB-C, màn hình 6.1 inch.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 3
            ],
            [
                'name'=> 'Xiaomi 15 Ultra',
                'img'=> $img . '13.jpg',
                'price'=> 21990000,
                'inventory'=> rand(100, 650),
                'description'=> $xiaomi,
                'sort_description'=> 'Xiaomi 15 Ultra flagship với camera Light Fusion, Snapdragon 8 Gen 3 Leading, pin 5500mAh 120W.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 4
            ],
            [
                'name'=> 'Xiaomi 15',
                'img'=> $img . '14.jpg',
                'price'=> 15990000,
                'inventory'=> rand(100, 650),
                'description'=> $xiaomi,
                'sort_description'=> 'Xiaomi 15 tiêu chuẩn với Snapdragon 8 Gen 3, camera 50MP, pin 5000mAh, thiết kế hiện đại.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 4
            ],
            [
                'name'=> 'Xiaomi 14 Ultra',
                'img'=> $img . '15.jpg',
                'price'=> 18990000,
                'inventory'=> rand(100, 650),
                'description'=> $xiaomi,
                'sort_description'=> 'Xiaomi 14 Ultra cao cấp với camera Leica, Snapdragon 8 Gen 3, màn hình 6.73 inch 120Hz.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 4
            ],
            [
                'name'=> 'Xiaomi 14 Civi',
                'img'=> $img . '16.jpg',
                'price'=> 12990000,
                'inventory'=> rand(100, 650),
                'description'=> $xiaomi,
                'sort_description'=> 'Xiaomi 14 Civi tầm trung với camera 50MP, thiết kế mỏng nhẹ, Snapdragon 8 Gen 2 Leading Version.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 4
            ],
            // -- realistic new phone models (images continue from 17.jpg) --
            [
              'name'=> 'OPPO Find N3',
              'img'=> $img . '17.jpg',
              'price'=> 23990000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO Find N3 - điện thoại gập cao cấp, camera mạnh mẽ và màn hình kép.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'OPPO Reno12 Pro',
              'img'=> $img . '18.jpg',
              'price'=> 13990000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'Reno12 Pro với camera tele nâng cao, thiết kế mỏng và sạc nhanh.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'OPPO A59',
              'img'=> $img . '19.jpg',
              'price'=> 4990000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO A59 - lựa chọn giá rẻ cho nhu cầu cơ bản, pin lớn và camera ổn.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'Samsung Galaxy S24 Ultra',
              'img'=> $img . '20.jpg',
              'price'=> 29990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy S24 Ultra với camera 200MP, zoom quang và màn hình siêu sáng.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'Samsung Galaxy A35',
              'img'=> $img . '21.jpg',
              'price'=> 7490000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy A35 tầm trung với màn hình AMOLED và pin ổn định.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'Samsung Galaxy Z Flip 6',
              'img'=> $img . '22.jpg',
              'price'=> 23990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy Z Flip 6 - điện thoại gập nhỏ gọn, phong cách, nhiều màu sắc.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'iPhone SE (2024)',
              'img'=> $img . '23.jpg',
              'price'=> 7990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone SE 2024 nhỏ gọn, hiệu năng cao với chip mới, phù hợp người dùng thích thiết kế truyền thống.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'iPhone 14 Plus',
              'img'=> $img . '24.jpg',
              'price'=> 18990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 14 Plus - màn hình lớn, pin lâu, trải nghiệm iOS mượt mà.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'iPhone 14 Pro',
              'img'=> $img . '25.jpg',
              'price'=> 24990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 14 Pro với hệ thống camera Pro và màn hình ProMotion.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'Xiaomi 13T',
              'img'=> $img . '26.jpg',
              'price'=> 12990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Xiaomi 13T - flagship tập trung hiệu năng và camera chất lượng.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Redmi Note 13 Pro',
              'img'=> $img . '27.jpg',
              'price'=> 5990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Redmi Note 13 Pro - tầm trung mạnh mẽ, pin lớn và camera ổn.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Poco F6',
              'img'=> $img . '28.jpg',
              'price'=> 8990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Poco F6 - hiệu năng chơi game tốt, tản nhiệt mạnh, pin trung bình.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Samsung Galaxy S23 FE',
              'img'=> $img . '30.jpg',
              'price'=> 12990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy S23 FE - bản thu gọn nhưng vẫn mạnh mẽ, giá hợp lý.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'iPhone 13 Mini (Certified Refurbished)',
              'img'=> $img . '31.jpg',
              'price'=> 8990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 13 Mini – lựa chọn nhỏ gọn đã qua tân trang, hiệu năng vẫn mạnh.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'Xiaomi 13 Pro',
              'img'=> $img . '32.jpg',
              'price'=> 16990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Xiaomi 13 Pro - camera hợp tác Leica, hiệu năng cao và sạc nhanh.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Samsung Galaxy M14',
              'img'=> $img . '33.jpg',
              'price'=> 3490000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy M14 - pin khủng, phù hợp người dùng phổ thông cần thời lượng sử dụng lâu.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'OPPO A18s',
              'img'=> $img . '34.jpg',
              'price'=> 2490000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO A18s - smartphone giá rẻ cho học sinh, pin tốt và thiết kế nhẹ.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'Xiaomi Redmi 12C',
              'img'=> $img . '35.jpg',
              'price'=> 1790000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Redmi 12C - điện thoại cực rẻ, cấu hình cơ bản, pin lớn.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'iPhone 12 (Used)',
              'img'=> $img . '36.jpg',
              'price'=> 5490000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 12 hàng đã qua sử dụng, giá tốt cho người muốn trải nghiệm iOS.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'OPPO K11 Pro',
              'img'=> $img . '37.jpg',
              'price'=> 6990000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO K11 Pro - hiệu năng tốt, camera ổn, giá hợp lý.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'OPPO Pad Air',
              'img'=> $img . '38.jpg',
              'price'=> 8990000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO Pad Air - tablet mỏng nhẹ, phục vụ giải trí và học tập.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'Samsung Galaxy S22 (Refurbished)',
              'img'=> $img . '39.jpg',
              'price'=> 6990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy S22 đã tân trang, vẫn mạnh mẽ và đáng mua.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'Samsung Galaxy A14',
              'img'=> $img . '40.jpg',
              'price'=> 3490000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy A14 - lựa chọn tầm trung với pin tốt và hiệu năng ổn.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'Samsung Galaxy Tab A9',
              'img'=> $img . '41.jpg',
              'price'=> 7990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy Tab A9 - tablet giá hợp lý cho học tập và giải trí.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'iPhone SE (2022)',
              'img'=> $img . '42.jpg',
              'price'=> 10990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone SE 2022 - nhỏ gọn, hiệu năng cao với chip A15.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'iPhone 11 (Used)',
              'img'=> $img . '43.jpg',
              'price'=> 4290000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 11 đã qua sử dụng với tình trạng tốt, giá hợp lý.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'iPhone XR (Used)',
              'img'=> $img . '44.jpg',
              'price'=> 3490000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone XR tân trang, phù hợp người dùng cơ bản.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'Xiaomi Mi Mix Fold 3',
              'img'=> $img . '45.jpg',
              'price'=> 27990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Mi Mix Fold 3 - điện thoại gập đầu bảng của Xiaomi, cấu hình mạnh.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Xiaomi 12T Pro',
              'img'=> $img . '46.jpg',
              'price'=> 14990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Xiaomi 12T Pro - camera 200MP, hiệu năng cao trong tầm giá.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Redmi Note 12',
              'img'=> $img . '47.jpg',
              'price'=> 4990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Redmi Note 12 - tầm trung giá tốt, pin lâu.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Poco X6 Pro',
              'img'=> $img . '48.jpg',
              'price'=> 6990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Poco X6 Pro - hiệu năng chơi game, tản nhiệt mạnh.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'OPPO Pad 2',
              'img'=> $img . '49.jpg',
              'price'=> 11990000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO Pad 2 - tablet cao cấp, phù hợp giải trí và làm việc nhẹ.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            
            [
              'name'=> 'iPhone 11 Pro Max (Used)',
              'img'=> $img . '52.jpg',
              'price'=> 8990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 11 Pro Max đã qua sử dụng, cấu hình mạnh, giá tốt.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'Samsung Galaxy A14 5G',
              'img'=> $img . '53.jpg',
              'price'=> 3990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy A14 5G - kết nối 5G ở phân khúc phổ thông.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'OPPO K10x',
              'img'=> $img . '54.jpg',
              'price'=> 3990000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO K10x - hiệu năng tốt trong tầm giá, pin lớn.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'Xiaomi 12 Lite',
              'img'=> $img . '55.jpg',
              'price'=> 7990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Xiaomi 12 Lite - mỏng nhẹ, camera tốt cho tầm trung.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'POCO M6',
              'img'=> $img . '56.jpg',
              'price'=> 2690000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'POCO M6 - smartphone giá rẻ với pin lớn và cấu hình cơ bản.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'OPPO A77s',
              'img'=> $img . '57.jpg',
              'price'=> 5490000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO A77s - pin lớn, thiết kế trẻ trung, phù hợp nhu cầu phổ thông.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'Samsung Galaxy S21 FE (Refurbished)',
              'img'=> $img . '58.jpg',
              'price'=> 8990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy S21 FE tân trang, vẫn mạnh mẽ, giá hợp lý.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'Samsung Galaxy Buds Live (bundle)',
              'img'=> $img . '59.jpg',
              'price'=> 1990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Tai nghe Galaxy Buds Live tích hợp tốt với các thiết bị Samsung.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'iPhone 8 (Used)',
              'img'=> $img . '60.jpg',
              'price'=> 1590000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 8 đã qua sử dụng, lựa chọn giá rẻ cho trải nghiệm iOS cơ bản.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'iPhone SE (3rd Gen)',
              'img'=> $img . '61.jpg',
              'price'=> 8990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone SE thế hệ mới - nhỏ gọn, hiệu năng cao, giá phải chăng.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'Xiaomi Redmi Note 11S',
              'img'=> $img . '62.jpg',
              'price'=> 4790000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Redmi Note 11S - camera tốt, tầm trung đa dụng.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Redmi 11 Prime',
              'img'=> $img . '63.jpg',
              'price'=> 3290000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Redmi 11 Prime - lựa chọn phổ thông, pin lớn.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'POCO C61',
              'img'=> $img . '64.jpg',
              'price'=> 1990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'POCO C61 - smartphone cơ bản, phù hợp học sinh và nhu cầu nhẹ.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'OPPO A18',
              'img'=> $img . '65.jpg',
              'price'=> 2290000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO A18 nhỏ nhẹ, pin ổn, giá mềm.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'Samsung Galaxy S21 Ultra (Used)',
              'img'=> $img . '66.jpg',
              'price'=> 13990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'S21 Ultra đã qua sử dụng, cấu hình vẫn mạnh mẽ.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'Samsung Galaxy Tab S8 FE',
              'img'=> $img . '67.jpg',
              'price'=> 15990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Tab S8 FE - tablet cao cấp nhẹ, dùng cho công việc và giải trí.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'iPhone 13 (Used)',
              'img'=> $img . '68.jpg',
              'price'=> 10990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 13 đã qua sử dụng, vẫn là lựa chọn ổn cho iOS.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'Xiaomi 11T',
              'img'=> $img . '69.jpg',
              'price'=> 11990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Xiaomi 11T - hiệu năng tốt, camera 108MP trên một số phiên bản.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Redmi Go (Basic)',
              'img'=> $img . '70.jpg',
              'price'=> 990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Redmi Go - điện thoại cơ bản cực rẻ cho nhu cầu cơ bản.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Samsung Galaxy A04s',
              'img'=> $img . '72.jpg',
              'price'=> 1990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy A04s - smartphone phổ thông, pin lớn.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'Xiaomi Poco M5s',
              'img'=> $img . '73.jpg',
              'price'=> 2790000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'POCO M5s - pin lớn, hiệu năng ổn cho tầm giá.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'iPhone 12 Mini (Used)',
              'img'=> $img . '74.jpg',
              'price'=> 4590000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 12 Mini đã qua sử dụng, nhỏ gọn và tiện lợi.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'Samsung Galaxy A04 Core',
              'img'=> $img . '75.jpg',
              'price'=> 1190000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy A04 Core - lựa chọn siêu rẻ cho nhu cầu cơ bản.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'Xiaomi 11 Lite NE',
              'img'=> $img . '76.jpg',
              'price'=> 8990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> '11 Lite NE - mỏng nhẹ, camera đẹp, phù hợp người thích thiết kế.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            // additional products to reach 100 (images 77..100)
            [
              'name'=> 'OPPO A58',
              'img'=> $img . '77.jpg',
              'price'=> 2790000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO A58 - lựa chọn phổ thông, pin bền và thiết kế trẻ trung.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'OPPO Find X7 Pro',
              'img'=> $img . '78.jpg',
              'price'=> 21990000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'Phiên bản Pro của Find X7 với camera nâng cấp và pin lớn.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'Samsung Galaxy S25',
              'img'=> $img . '79.jpg',
              'price'=> 23990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy S25 - flagship mới với hiệu năng và camera cải tiến.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'Samsung Galaxy A25',
              'img'=> $img . '80.jpg',
              'price'=> 8490000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy A25 - tầm trung cân bằng giữa hiệu năng và pin.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'Samsung Galaxy Z Fold 7',
              'img'=> $img . '81.jpg',
              'price'=> 49990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Z Fold 7 - trải nghiệm gập cao cấp với màn hình lớn và đa nhiệm.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'iPhone 17 Pro',
              'img'=> $img . '82.jpg',
              'price'=> 38990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 17 Pro - flagship Apple với chip mới và camera Pro.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'iPhone 17',
              'img'=> $img . '83.jpg',
              'price'=> 24990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 17 tiêu chuẩn với hiệu năng mạnh mẽ và hệ sinh thái iOS.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'iPhone 16 Mini',
              'img'=> $img . '84.jpg',
              'price'=> 16990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 16 Mini - nhỏ gọn, hiệu năng tốt, phù hợp người dùng thích thiết kế nhỏ.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'Xiaomi 14T Pro',
              'img'=> $img . '85.jpg',
              'price'=> 17990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> '14T Pro - hiệu năng cao, camera tốt cho người dùng sáng tạo nội dung.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Redmi Note 14 Pro',
              'img'=> $img . '86.jpg',
              'price'=> 6990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Redmi Note 14 Pro - tầm trung mạnh mẽ, pin lớn và camera ổn.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'POCO F5 GT',
              'img'=> $img . '87.jpg',
              'price'=> 9990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'POCO F5 GT - smartphone gaming hiệu năng cao, tản nhiệt tốt.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'OPPO Reno13',
              'img'=> $img . '88.jpg',
              'price'=> 11990000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'Reno13 - thiết kế thời trang, camera cải tiến và sạc nhanh.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'OPPO A1k',
              'img'=> $img . '89.jpg',
              'price'=> 1499000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO A1k - lựa chọn siêu tiết kiệm cho nhu cầu cơ bản.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'Samsung Galaxy Tab S11',
              'img'=> $img . '90.jpg',
              'price'=> 21990000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Tab S11 - tablet cao cấp cho công việc và giải trí chuyên sâu.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'iPhone 15 Plus',
              'img'=> $img . '92.jpg',
              'price'=> 21990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 15 Plus - màn hình lớn và pin tốt trong dòng iPhone 15.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'iPhone SE (2025)',
              'img'=> $img . '93.jpg',
              'price'=> 7990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone SE thế hệ mới 2025 - nhỏ gọn, hiệu năng tốt.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'Xiaomi Pad 6',
              'img'=> $img . '94.jpg',
              'price'=> 8990000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Xiaomi Pad 6 - tablet đa năng cho học tập và giải trí.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Xiaomi Smart Band 9',
              'img'=> $img . '95.jpg',
              'price'=> 999000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Smart Band 9 - theo dõi sức khỏe, pin lâu.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'Redmi Note 13',
              'img'=> $img . '96.jpg',
              'price'=> 4490000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'Redmi Note 13 - smartphone tầm trung với cấu hình cân bằng.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'POCO X5',
              'img'=> $img . '97.jpg',
              'price'=> 5690000,
              'inventory'=> rand(100, 650),
              'description'=> $xiaomi,
              'sort_description'=> 'POCO X5 - thiết kế trẻ trung, hiệu năng đủ dùng hàng ngày.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 4
            ],
            [
              'name'=> 'OPPO Ace 3',
              'img'=> $img . '98.jpg',
              'price'=> 15990000,
              'inventory'=> rand(100, 650),
              'description'=> $oppo,
              'sort_description'=> 'OPPO Ace 3 - hiệu năng cao, tối ưu cho game và đa nhiệm.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 1
            ],
            [
              'name'=> 'Samsung Galaxy S23 (Used)',
              'img'=> $img . '99.jpg',
              'price'=> 8490000,
              'inventory'=> rand(100, 650),
              'description'=> $samsung,
              'sort_description'=> 'Galaxy S23 đã qua sử dụng, cấu hình vẫn mạnh mẽ.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 2
            ],
            [
              'name'=> 'iPhone 13 Pro (Refurbished)',
              'img'=> $img . '100.jpg',
              'price'=> 10990000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 13 Pro tân trang - lựa chọn cân bằng giữa giá và hiệu năng.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
            [
              'name'=> 'iPhone 17 Pro max',
              'img'=> $img . '101.jpg',
              'price'=> 45000000,
              'inventory'=> rand(100, 650),
              'description'=> $iphone,
              'sort_description'=> 'iPhone 17 Pro Max- flagship Apple tốt nhất hiện tại với chip mới và camera Pro.',
              'facebook'=> '123',
              'linkedin'=> '123',
              'category_id' => 3
            ],
          ];

        DB::table('products')->insert($products);
    }
}