// on document ready
document.addEventListener("DOMContentLoaded", async () => {
  // fetch db
  const db = await (await fetch("db.json")).json();

  // populate the recent jobs list
  const recentJobs = document.querySelector("#recent-jobs");
  db.jobs.slice(0, 10).forEach((job) => {
    const jobItem = document.createElement("li");

    // does the job have a logo?
    if (!job.logo) job.logo = "https://via.placeholder.com/100x100";

    jobItem.innerHTML = `
        <a href="${job.url}" target="_blank" rel="noopener noreferrer">
            <img src="${job.logo}" alt="${job.company}" />
            <div class="job-info">
                <span><b>${job.company}</b> is hiring a <b>${job.length} ${job.role}</b> to work from <b>${job.location}</b> for <b>${job.compensation}</b></span>
            </div>
        </a>
    `;
    recentJobs.appendChild(jobItem);
  });
});
