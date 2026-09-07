
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as Icons from "lucide-react";

const Categories = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${backendUrl}/api/user/categoryranking-data`
        );

        const data = await res.json();

        if (data.success) {
          setCategories(data.data);
        }
      } catch (error) {
        console.error("Category Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [backendUrl]);

  const handleNavigate = (slug) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    navigate(`/Resources/${slug}`);
  };

  const getIcon = (iconName) => {
    return Icons[iconName] || Icons.FolderSearch;
  };

  return (
    <section className="bg-[#FAFAF8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-10 flex flex-col gap-5 border-b border-[#E3E8E3] pb-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#141F19] sm:text-3xl">
              Explore by category
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#4B5C53] sm:text-base">
              Find tools and resources around the work you want to do.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/Category")}
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#3F7A5B] transition-colors hover:text-[#336249] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
          >
            View all categories
            <span className="transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* =====================================================
            CATEGORY INDEX
        ====================================================== */}
        {loading ? (
          <div className="divide-y divide-[#E3E8E3] border-y border-[#E3E8E3]">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-5 sm:py-6"
              >
                <div className="h-10 w-10 animate-pulse rounded-lg bg-[#E7F1EA]" />

                <div className="flex-1">
                  <div className="h-4 w-32 animate-pulse rounded bg-[#E3E8E3]" />
                  <div className="mt-2 h-3 w-20 animate-pulse rounded bg-[#E3E8E3]" />
                </div>

                <div className="hidden h-3 w-12 animate-pulse rounded bg-[#E3E8E3] sm:block" />

                <div className="h-4 w-4 animate-pulse rounded bg-[#E3E8E3]" />
              </div>
            ))}
          </div>
        ) : categories.length === 0 ? (
          <div className="border-y border-[#E3E8E3] py-16 text-center">
            <div className="mx-auto max-w-md">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F1EA] text-[#3F7A5B]">
                <Icons.FolderSearch size={19} />
              </div>

              <h3 className="mt-4 text-base font-semibold text-[#141F19]">
                No categories available
              </h3>

              <p className="mt-2 text-sm text-[#8A988E]">
                Categories will appear here when they become available.
              </p>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-[#E3E8E3] border-y border-[#E3E8E3]">
            {categories.slice(0, 8).map((category, index) => {
              const IconComponent = getIcon(category.icon);

              return (
                <button
                  key={category._id || category.slug || index}
                  type="button"
                  onClick={() => handleNavigate(category.slug)}
                  className="group flex w-full items-center gap-4 py-5 text-left transition-colors duration-150 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3F7A5B] sm:gap-6 sm:py-6"
                >
                  {/* Number */}
                  <span className="hidden w-8 shrink-0 font-mono text-xs text-[#8A988E] sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E7F1EA] text-[#3F7A5B] transition-colors duration-150 group-hover:bg-[#3F7A5B] group-hover:text-white">
                    <IconComponent
                      size={18}
                      strokeWidth={1.8}
                    />
                  </span>

                  {/* Category name */}
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-base font-semibold text-[#141F19] transition-colors duration-150 group-hover:text-[#3F7A5B] sm:text-lg">
                      {category.name}
                    </span>

                    <span className="mt-1 block text-xs text-[#8A988E]">
                      Browse tools & resources
                    </span>
                  </span>

                  {/* Rating */}
                  {category.averageRating !== undefined &&
                    category.averageRating !== null && (
                      <span className="hidden shrink-0 items-center gap-1.5 text-xs text-[#8A988E] sm:flex">
                        <Icons.Star
                          size={13}
                          className="text-[#3F7A5B]"
                          fill="currentColor"
                        />
                        {category.averageRating}
                      </span>
                    )}

                  {/* Arrow */}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#8A988E] transition-all duration-150 group-hover:bg-[#E7F1EA] group-hover:text-[#3F7A5B]">
                    <Icons.ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* =====================================================
            BOTTOM NAVIGATION
        ====================================================== */}
        {!loading && categories.length > 0 && (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#8A988E]">
              Browse categories to narrow down your search.
            </p>

            <button
              type="button"
              onClick={() => navigate("/Compare-tools")}
              className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#E3E8E3] bg-white px-4 py-2.5 text-sm font-medium text-[#4B5C53] transition-all duration-150 hover:border-[#3F7A5B] hover:text-[#3F7A5B] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
            >
              Compare tools
              <Icons.ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
