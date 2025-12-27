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
        $desc = '<ul>
            <li>
              <p>
                Rau củ chứa rất nhiều vitamin và chất dinh dưỡng nên mang đến
                rất nhiều lợi ích cho sức khỏe con người.&nbsp;
              </p>
            </li>
            <li>
              <p>Hỗ trợ giảm cân</p>
            </li>
            <li>
              <p>
                Giảm nguy cơ mắc các bệnh về tim mạch, béo phì và cả ung thư
              </p>
            </li>
            <li>
              <p>Tăng cường sức đề kháng của cơ thể</p>
            </li>
            <li>
              <p>Cải thiện thị lực</p>
            </li>
            <li>
              <p>Điều hòa đường huyết</p>
            </li>
            <li>
              <p>Giảm cholesterol trong máu</p>
            </li>
            <li>
              <p>Điều hòa huyết áp</p>
            </li>
          </ul>
          <p>
            <br />
            <strong>Cách chọn rau củ tươi ngon</strong>
          </p>
          <ul>
            <li>
              <p>
                Dựa vào hình dáng bên ngoài: Nên ưu tiên chọn các loại rau củ có
                phần vỏ không có các vết sâu, cuống lá không bị nhũn, thâm đen.
                Tránh chọn những loại quả có vẻ ngoài to tròn, căng lớn, bởi đây
                có thể là những quả đã bị tiêm thuốc, không an toàn cho sức
                khỏe.
              </p>
            </li>
            <li>
              <p>
                Dựa vào màu sắc: Màu sắc của các loại rau củ thường tươi mới,
                không có các vết xước, héo hay quá đậm màu. Các loại củ có màu
                quá xanh hoặc quá bóng sẽ không hẳn là an toàn cho sức khỏe
                người dùng.
              </p>
            </li>
            <li>
              <p>
                Dựa vào mùi hương: Mùi hương tự nhiên của các loại rau củ sẽ là
                mùi đặc trưng theo từng loại chứ không phải là mùi hắc, nồng khó
                chịu. Nếu các loại củ bạn đang chọn có mùi hóa chất hãy ngưng sử
                dụng ngay.
              </p>
            </li>
            <li>
              <p>
                Dựa vào cảm nhận khi cầm: Những loại củ quả cầm chắc tay, kích
                thước vừa phải, không quá to sẽ thường ngon hơn những loại to
                lớn nhưng khối lượng nhẹ. Một số loại rau củ bạn chỉ nên chọn
                những quả nhỏ, đều tay sẽ ngon hơn.
              </p>
            </li>
          </ul>';

        $img = '/assets/users/images/Features/feet';

        $products = [
            [
                'name'=> 'Thịt bò nạt',
                'img'=> $img . '1.jpg',
                'price'=> 200000,
                'inventory'=> 20,
                'description'=> $desc,
                'sort_description'=> 'DT SHOP là một trong những hệ thống cửa hàng Blabla nhập khẩu ở nước ngoài cung cấp cho quý khách những trái Blabla Egardentươi ngon nhất cũng như các loại Blabla nhập khẩu, Blabla vùng miền khác.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 1
            ],
            [
                'name'=> 'Chuối',
                'img'=> $img . '2.jpg',
                'price'=> 17800,
                'inventory'=> 20,
                'description'=> $desc,
                'sort_description'=> 'DT SHOP là một trong những hệ thống cửa hàng Blabla nhập khẩu ở nước ngoài cung cấp cho quý khách những trái Blabla Egardentươi ngon nhất cũng như các loại Blabla nhập khẩu, Blabla vùng miền khác.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 2
            ],
            [
                'name'=> 'Ổi',
                'img'=> $img . '3.jpg',
                'price'=> 25000,
                'inventory'=> 20,
                'description'=> $desc,
                'sort_description'=> 'DT SHOP là một trong những hệ thống cửa hàng Blabla nhập khẩu ở nước ngoài cung cấp cho quý khách những trái Blabla Egardentươi ngon nhất cũng như các loại Blabla nhập khẩu, Blabla vùng miền khác.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 2
            ],
            [
                'name'=> 'Dưa hấu',
                'img'=> $img . '4.jpg',
                'price'=> 44020,
                'inventory'=> 20,
                'description'=> $desc,
                'sort_description'=> 'DT SHOP là một trong những hệ thống cửa hàng Blabla nhập khẩu ở nước ngoài cung cấp cho quý khách những trái Blabla Egardentươi ngon nhất cũng như các loại Blabla nhập khẩu, Blabla vùng miền khác.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 2
            ],
            [
                'name'=> 'Nho tím',
                'img'=> $img . '5.jpg',
                'price'=> 120000,
                'inventory'=> 20,
                'description'=> $desc,
                'sort_description'=> 'DT SHOP là một trong những hệ thống cửa hàng Blabla nhập khẩu ở nước ngoài cung cấp cho quý khách những trái Blabla Egardentươi ngon nhất cũng như các loại Blabla nhập khẩu, Blabla vùng miền khác.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 2
            ],
            [
                'name'=> 'Hamburger',
                'img'=> $img . '6.jpg',
                'price'=> 86000,
                'inventory'=> 20,
                'description'=> $desc,
                'sort_description'=> 'DT SHOP là một trong những hệ thống cửa hàng Blabla nhập khẩu ở nước ngoài cung cấp cho quý khách những trái Blabla Egardentươi ngon nhất cũng như các loại Blabla nhập khẩu, Blabla vùng miền khác.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 3
            ],
            [
                'name'=> 'Xoài keo',
                'img'=> $img . '7.jpg',
                'price'=> 69000,
                'inventory'=> 20,
                'description'=> $desc,
                'sort_description'=> 'DT SHOP là một trong những hệ thống cửa hàng Blabla nhập khẩu ở nước ngoài cung cấp cho quý khách những trái Blabla Egardentươi ngon nhất cũng như các loại Blabla nhập khẩu, Blabla vùng miền khác.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 2
            ],
            [
                'name'=> 'Táo Úc',
                'img'=> $img . '8.jpg',
                'price'=> 53000,
                'inventory'=> 20,
                'description'=> $desc,
                'sort_description'=> 'DT SHOP là một trong những hệ thống cửa hàng Blabla nhập khẩu ở nước ngoài cung cấp cho quý khách những trái Blabla Egardentươi ngon nhất cũng như các loại Blabla nhập khẩu, Blabla vùng miền khác.',
                'facebook'=> '123',
                'linkedin'=> '123',
                'category_id' => 2
            ],
        ];

        DB::table('products')->insert($products);
    }
}