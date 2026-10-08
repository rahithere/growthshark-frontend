import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const API =
  import.meta.env.VITE_PRORITERZ_API || "https://proriterz.com/wp-json/wp/v2";

// Helper function to fix old Cloudways URLs
const fixImageUrl = (url) => {
  if (!url) return "https://via.placeholder.com/800x400?text=Image+Not+Found";
  return url.replace(
    "wordpress-1281832-4641891.cloudwaysapps.com",
    "proriterz.com"
  );
};

// Convert WordPress HTML excerpts to plain text for meta tags
const stripHtmlTags = (html) => {
  if (!html) return "";
  const withoutTags = html.replace(/<[^>]*>/g, " ");
  const decoded = withoutTags
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    )
    .replace(/&nbsp;/gi, " ");
  return decoded.replace(/\s+/g, " ").trim();
};

// Helper to make links open in a new tab
const fixLinks = (html) => {
  if (!html) return "";
  return html.replaceAll(
    /<a /g,
    '<a target="_blank" rel="noopener noreferrer" '
  );
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const res = await fetch(`${API}/posts?slug=${slug}&_embed`);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const data = await res.json();

        if (data.length > 0) {
          setPost(data[0]);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  const getTitle = () => {
    switch (slug) {
      case "what-is-white-label-content":
        return "Get information on what is white label content | Growthshark";
      case "research-tips-for-writing-content-that-ranks":
        return "Learn to Write Content That Ranks on Google | Growthshark";
      case "how-to-create-successful-data-driven-content":
        return "Know about how to create successful data driven content | Growthshark";
      case "website-content-audit":
        return "Identify Website Content Issues | GrowthShark";
      case "casual-vs-conversational":
        return "Understand Casual vs Conversational Writing | Growthshark";
      case "content-site-case-study":
        return "Get a Real Content Case Study | GrowthShark";
      case "why-should-content-repurposing-be-a-crucial-part-of-your-content-marketing-strategy":
        return "Find Smart Content Repurposing Tips | GrowthShark";
      case "what-is-the-role-of-content-in-digital-marketing":
        return "Identify what is the role of content in Digital Marketing | Growthshark";
      case "how-to-deploy-content-effectively-to-maximize-roi-curated-tips-for-businesses-in-2021-from-the-man-himself":
        return "Know how to Deploy Content Effectively for better reach | Growthshark";
      default:
        return `${stripHtmlTags(post?.title?.rendered) || "GrowthShark Blog"} | GrowthShark`;
    }
  };

  const getDescription = () => {
    switch (slug) {
      case "what-is-white-label-content":
        return "Learn what white label content is and how it helps you scale faster. Discover key benefits and start growing smarter today.";
      case "research-tips-for-writing-content-that-ranks":
        return "Find smart research methods to write high-ranking content. GrowthShark shares practical ways to analyze keywords and competitors.";
      case "how-to-create-successful-data-driven-content":
        return "Discover how GrowthShark uses data and insights to create high-performing content. Learn simple techniques to boost your content results today.";
      case "website-content-audit":
        return "Learn how GrowthShark helps you audit your website content, fix gaps, and improve SEO performance. Start optimizing your site more effectively today.";
      case "casual-vs-conversational":
        return "Discover how GrowthShark explains tone differences and helps you choose the best style for engagement. Learn how to improve your writing today.";
      case "content-site-case-study":
        return "See how GrowthShark builds successful content sites with real strategies and insights. Learn what works and apply proven methods to your content today.";
      case "why-should-content-repurposing-be-a-crucial-part-of-your-content-marketing-strategy":
        return "Learn why repurposing matters and how GrowthShark helps you expand reach and boost ROI. Discover simple ways to turn one asset into many.";
      case "what-is-the-role-of-content-in-digital-marketing":
        return "Discover how GrowthShark uses content to drive visibility, traffic, and conversions. Understand why content is essential to your marketing success today.";
      case "how-to-deploy-content-effectively-to-maximize-roi-curated-tips-for-businesses-in-2021-from-the-man-himself":
        return "Explore GrowthShark's proven ways to deploy content for better reach and ROI. Learn valuable tips and start improving your content performance today.";
      default:
        return (
          stripHtmlTags(post?.excerpt?.rendered) ||
          "Read the latest blogs on SEO, marketing, and business growth from GrowthShark."
        );
    }
  };

  if (loading)
    return <p className="text-center p-4 text-white">Loading post...</p>;
  if (error)
    return <p className="text-center text-red-500 p-4">{error}</p>;

  const featuredImage = fixImageUrl(
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url
  );

  const fixedContent = fixLinks(
    post?.content?.rendered?.replaceAll(
      "wordpress-1281832-4641891.cloudwaysapps.com",
      "proriterz.com"
    )
  );

  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] min-h-screen py-10">
      <Helmet>
        <title>
          {getTitle()}
        </title>
        <meta name="description" content={getDescription()} />
      </Helmet>
      <style>
        {`
          .prose p {
            font-size: 1.125rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
          }

          /* Highlighted important sentences */
          .prose p strong {
            font-size: 1.75rem;
            display: block;
            text-align: left;
            margin: 2rem 0;
            font-weight: bold;
            color: #ffffff;
          }

          .prose h1 {
            font-size: 2.75rem;
            font-weight: bold;
            margin-top: 2.5rem;
            margin-bottom: 2rem;
          }

          .prose h2 {
            font-size: 2.25rem;
            font-weight: bold;
            margin-top: 2rem;
            margin-bottom: 1.75rem;
          }

          .prose h3 {
            font-size: 1.75rem;
            font-weight: bold;
            margin-top: 1.75rem;
            margin-bottom: 1.5rem;
          }

          .prose ul {
            list-style-type: disc;
            padding-left: 1.75rem;
          }

          .prose li {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .prose img {
            max-width: 100%;
            border-radius: 0.5rem;
            margin: 1.75rem 0;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center text-white leading-snug p-6"
          dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
        />

        <div className="flex justify-center p-6">
          <img
            src={featuredImage}
            alt={post?.title?.rendered || "Blog Image"}
            className="rounded-xl shadow-2xl max-h-[450px] w-full object-cover"
          />
        </div>

        <div
          className="prose prose-lg prose-invert max-w-none text-white mx-auto
                     [&_a]:text-sky-400 [&_a:hover]:text-sky-500 [&_a:hover]:underline"
          dangerouslySetInnerHTML={{ __html: fixedContent }}
        />
      </div>
    </div>
  );
}
