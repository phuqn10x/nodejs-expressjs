const mongoose = require('mongoose');
const sources = require('../app/models/Course.js');
mongoose.connect('mongodb://localhost:27017/education_dev', {useNewUrlParser: true, useUnifiedTopology: true});

async function seedSources() {
    try {
        // await sources.deleteMany({});
        await sources.create([
            {
                name: "RESIDENT EVIL 2 #1: NGẬP TRÀN XÁC SỐNG !!! BOM TẤN KINH DỊ 2019 ĐÂY RỒI !!!",
                description: "Đây là game RESIDENT EVIL 2 Remake chơi trên kênh Trực Tiếp Game của tôi - Dũng CT. Rất mong nhận được sự ủng hộ của ae.",
                videoId: "tpXaQkAbJ_I",
                slug: 'resident-evil-2-1',
                level: "Trình độ nâng cao"
            },
            {
                name: "RESIDENT EVIL 2 #2: 2 TIẾNG VẬT LỘN VỚI CÁC LOÀI QUÁI VẬT KINH KHIẾP NHẤT !!!",
                description: "Đây là game RESIDENT EVIL 2 Remake chơi trên kênh Trực Tiếp Game của tôi - Dũng CT. Rất mong nhận được sự ủng hộ của ae.",
                videoId: "3BTe0J1oDUo",
                slug: 'resident-evil-2-2',
                level: "Trình độ nâng cao"

            },
            {
                name: "RESIDENT EVIL 2 #3: MỸ NHÂN LỘ DIỆN GIỮA BẦY ZOMBIE !!! Tôi yêu em =)))",
                description: "Đây là game RESIDENT EVIL 2 Remake chơi trên kênh Trực Tiếp Game của tôi - Dũng CT. Rất mong nhận được sự ủng hộ của ae.",
                videoId: "C3-UtLqm1bk",
                slug: 'resident-evil-2-3',
                level: "Trình độ nâng cao"
            },
            {
                name: "RESIDENT EVIL 2 #4: GIẾT TRÙM CUỐI !!! NGƯỜI ĐẸP CỦA TÔI CHẾT RỒI :(((((",
                description: "Đây là game RESIDENT EVIL 2 Remake chơi trên kênh Trực Tiếp Game của tôi - Dũng CT. Rất mong nhận được sự ủng hộ của ae.",
                videoId: "xYnLX5wHoAM",
                slug: 'resident-evil-2-4',
                level: "Trình độ nâng cao"

            },
            {
                name: "RESIDENT EVIL 2 #5: NỮ CHÍNH CỦA GAME ĐÃ XUẤT HIỆN !!! Đẹp & Ngầu level max !!!",
                description: "Đây là game RESIDENT EVIL 2 Remake chơi trên kênh Trực Tiếp Game của tôi - Dũng CT. Rất mong nhận được sự ủng hộ của ae.",
                videoId: "NGRPGOxljcI",
                slug: 'resident-evil-2-5',
                level: "Trình độ nâng cao"

            },
            {
                name: "RESIDENT EVIL 2 #6: CHÁU HÒA BÌNH XINH QUÁ !!! Chào bố Dũng chưa con =))))",
                description: "Đây là game RESIDENT EVIL 2 Remake chơi trên kênh Trực Tiếp Game của tôi - Dũng CT. Rất mong nhận được sự ủng hộ của ae.",
                videoId: "-ORTJlckdAM",
                slug: 'resident-evil-2-6',
                level: "Trình độ nâng cao"
            }
            // Add more documents as needed
        ]);
        console.log('User seed data inserted successfully.');
    } catch (error) {
        console.error('Error seeding users:', error.message);
    }

}

module.exports = {seedSources};