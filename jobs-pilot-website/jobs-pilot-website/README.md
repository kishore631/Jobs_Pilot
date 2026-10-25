# Jobs Pilot website

A responsive static job-board website built with HTML, CSS, and JavaScript.

## Preview locally
Open `index.html` in a browser.

## Update job listings
Edit the `jobs` array at the top of `script.js`. Each job has:
- `company`
- `initials`
- `role`
- `location`
- `category`
- `url` (prefer the employer's official careers or application page)

The included listings are illustrative examples and are not verified live vacancies. Update them before publishing.

## Publish on Vercel
1. Sign in to https://vercel.com/
2. Create a GitHub repository and upload `index.html`, `style.css`, and `script.js`, or install Git and push this folder to GitHub.
3. In Vercel, choose **Add New → Project**, import the repository.
4. For this static site, leave the framework preset as **Other** (or choose no framework); no build command is needed.
5. Set the output directory to `.` if prompted, then click **Deploy**.
6. After deployment, copy the generated `https://....vercel.app` address.
7. Instagram → Profile → Edit profile → Links → Add external link → paste the Vercel address → Save.

## Important
- This is a static website. The job listings are edited in `script.js`; it does not yet have an admin dashboard or database.
- Verify every vacancy and deadline, and use official application links. Do not imply sample entries are confirmed openings.
