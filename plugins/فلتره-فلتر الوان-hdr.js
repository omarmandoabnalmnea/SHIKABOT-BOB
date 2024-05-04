import FormData from "form-data";
import Jimp from "jimp";

let handler = async (m, { conn, usedPrefix, command }) => {
	switch (command) {
		case "فلتره":
			{
				conn.enhancer = conn.enhancer ? conn.enhancer : {};
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `ابعت صورتك ياحب وهخليهالك طرش🦦\n\nابعت الصوره الاول ومنشن عليها🗿 \n*.فلتره*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime ${mime} not support`;
				else conn.enhancer[m.sender] = true;
				m.reply(wait);
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "فلتره");
					conn.sendFile(m.chat, This, "*https://www.instagram.com/shika17sm?igsh=MTM2YTJ5Ynh6dTUwcA== انستا المطور لو احتجت حاجه🐥...*", " 『https://www.instagram.com/shika17sm?igsh=MTM2YTJ5Ynh6dTUwcA==...』", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("*معرفتش اعملها وماتشتمنيش 🦦*");
					}
					delete conn.enhancer[m.sender];
				}
			}
			break;
		case "فلتر-الوان":
			{
				conn.recolor = conn.recolor ? conn.recolor : {};
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `ابعت اي صوره وانا هبعبصلك في الالوان🦦\n\nابعت الصوره الاول ومنشن عليها🗿 \n*.فلتر-الوان*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime ${mime} tidak support`;
				else conn.recolor[m.sender] = true;
				m.reply(wait);
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "فلتر-الوان");
					conn.sendFile(m.chat, This, "* نصيحهhttps://www.instagram.com/shika17sm?igsh=MTM2YTJ5Ynh6dTUwcA==-لو انت حاسس انو الدنيا جايه عليك البس بوكسر الشاذلي وريح الي بين رجليك ودا الانستا بتاعي لمزيد من الحكم والنصايح🦦 *", "『https://www.instagram.com/shika17sm?igsh=MTM2YTJ5Ynh6dTUwcA==...』", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("معرفتش اعملها وماتشتمنيش 🦦*");
					}
					delete conn.recolor[m.chat];
				}
			}
			break;
		case "hd":
			{
				conn.hdr = conn.hdr ? conn.hdr : {};
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `ابعت صورتك وهخليلك الجوده عسل زيي🌚 HD\n\nابعت الصوره الاول ومنشن عليها🗿 \n*.hd*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime ${mime} tidak support`;
				else conn.hdr[m.sender] = true;
				m.reply(wait);
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "الانستا بتاعي ياحته🔥 https://www.instagram.com/shika17sm?igsh=MTM2YTJ5Ynh6dTUwcA==", " https://www.instagram.com/shika17sm?igsh=MTM2YTJ5Ynh6dTUwcA== ...", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("*معرفتش اعملها وماتشتمنيش🦦*");
					}
					delete conn.hdr[m.sender];
				}
			}
			break;
	}
};
handler.help = ["فلتره","فلتر-الوان","hd"];
handler.tags = ["image-edit"];
handler.command = ["فلتره","فلتر-الوان","hd"];
export default handler;

async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}
