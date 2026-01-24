  import React, { useEffect, useContext, useState } from "react";
  import axios from "axios";
  import { AIContext } from "../Context/AitoolsContext";
  import { ExternalLink, MoveLeft, Star } from "lucide-react";

  const Bookmarks = () => {
    const { token, backendUrl } = useContext(AIContext);
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchBookmarks = async () => {
        try {
          const ids = JSON.parse(localStorage.getItem("bookmarks")) || [];
          if (ids.length === 0) {
            setLoading(false);
            return;
          }

          const { data } = await axios.post(
            backendUrl + "/api/user/bookmarks",
            { ids },
            { headers: { token } }
          );

          if (data.success) {
            setBookmarks(data.resources);
          }
        } catch (err) {
          console.error(err.message);
        } finally {
          setLoading(false);
        }
      };

      if (token) fetchBookmarks();
    }, [token]);

    if (loading) {
      return (
        <div className="text-center py-20 text-slate-500 font-bold">
          Loading bookmarks...
        </div>
      );
    }

   if (bookmarks.length === 0) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      {/* Emoji / Illustration */}
      <div className="text-6xl mb-6 animate-bounce">⭐</div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">
        No bookmarks yet
      </h2>

      {/* Subtitle */}
      <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md">
        You haven’t bookmarked any resources yet. Start exploring and save your favorite tools here for quick access later.
      </p>

      {/* Action Button */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out"
      >
        ← Back to Resources
      </button>
    </div>
  );
}



    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#020617] px-4 md:px-8 lg:px-16 py-8 pt-28">
  {/* Back Button */}
  <button
    onClick={() => window.history.back()}
    className="flex items-center gap-2 text-white  hover:bg-indigo-700 dark:hover:bg-indigo-600 font-semibold px-4 py-2 rounded-xl shadow-lg transition-all duration-300 ease-in-out"
  >
   <MoveLeft size={18} /> Back
  </button>

  {/* Page Title */}
  <h1 className="text-2xl md:text-3xl font-black mb-8 text-slate-900 dark:text-white text-center">
    ⭐ Your Bookmarked Resources
  </h1>

  {/* Card Grid */}
  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1400px]">
      {bookmarks.map((item) => (
        <div
          key={item._id}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all group"
        >
          {/* IMAGE */}
          <div className="flex items-center gap-4">
            <img
              src={item.img || item.image}
              alt={item.name}
              className="w-14 h-14 rounded-2xl object-cover bg-slate-100"
            />

            <div className="flex-1">
              <h2 className="font-bold text-lg group-hover:text-indigo-600 transition  dark:text-white">
                {item.name}
              </h2>
              <p className="text-xs text-slate-400 font-semibold uppercase">
                {item.pricing}
              </p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 line-clamp-3">
            {item.short_description || item.whatItDoes}
          </p>

          {/* CATEGORY */}
          <div className="flex flex-wrap gap-2 mt-4">
            {item.category?.map((cat, i) => (
              <span
                key={i}
                className="text-[10px] px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 font-bold"
              >
                {cat.label || cat}
              </span>
            ))}
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
              <Star size={14} fill="currentColor" />
              {item.rating || "N/A"}
            </div>

            <a
              href={`/resources/${item.slug}`}
              className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
            >
              View <ExternalLink size={14} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    );
  };

  export default Bookmarks;
